import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/http/http.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Account, AccountProfile } from '../../../master/models';
import { CandidateProfileResponse } from '../models/candidate-profile.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CandidateProfileService {
  constructor(
    private readonly authService: AuthService,
    private readonly http: HttpService,
  ) {}

  get profile(): Account {
    return this.authService.user;
  }

  update(payload: AccountProfile): Observable<Account> {
    return new Observable((observer: Observer<Account>) => {
      this.http.put('CAND_PROFILE_UPDATE', payload)
        .subscribe((response: CandidateProfileResponse) => {
          const { status, data } = response;

          if (status && status.code !== '200') {
            const error: Error = new Error(status.description);
            error.name = status.code;

            observer.error(new HttpErrorResponse({ error, status: +status.code, statusText: status.description }));
          } else {
            data.profile.birthdate = payload.birthdate;
            this.authService.user = data;
            observer.next(data);
          }
        }, (error) => {
          console.error('CandidateService update error:', error);
          observer.error(error);
        });
    });
  }
}
