import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/http/http.service';
import { RegistrationForm, RegistrationResponse } from '../models/registration-form.model';
import { ApiResponse } from '../../shared/http/responses.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly http: HttpService,
  ) {}

  submit(payload: RegistrationForm): Observable<RegistrationResponse> {
    return new Observable((observer: Observer<RegistrationResponse>) => {
      this.http.post('CAND_REGISTER', payload)
        .subscribe((response: ApiResponse) => {
          if (response.status.code !== '201') {
            const error = new Error(response.status.description);
            error.name = response.status.code;

            observer.error(new HttpErrorResponse({ error: error, status: Number(response.status.code), statusText: error.message }));
          } else
            observer.next(response);
        }, (error) => {
          console.error('Account registration error:', error);
          observer.error(error);
        });
    });
  }

  activate(payload: RegistrationForm, key: string, token: string): Observable<RegistrationResponse> {
    return new Observable((observer: Observer<RegistrationResponse>) => {
      this.http.post('CAND_ACCOUNT_ACTIVATION', payload, { key, token })
        .subscribe((response: ApiResponse) => {
          if (response.status.code !== '201') {
            const error = new Error(response.status.description);
            error.name = response.status.code;

            observer.error(new HttpErrorResponse({ error: error, status: Number(response.status.code), statusText: error.message }));
          } else
            observer.next(response);
        }, (error) => {
          console.error('Account activation error:', error);
          observer.error(error);
        });
    });
  }
}
