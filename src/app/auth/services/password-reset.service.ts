import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpService } from '../../shared/http/http.service';
import { PasswordReset } from '../models/password-reset.model';
import { PasswordResetResponse } from '../models/response.model';
import { GenericResponse } from '../../shared/http/responses.model';

@Injectable()
export class PasswordResetService {
  constructor(
    private http: HttpService,
  ) {}

  request(payload: { username: string }): Observable<GenericResponse> {
    return new Observable((observer: Observer<GenericResponse>) => {
      this.http.post('CAND_AUTH_PASSWORD_RESET', payload)
        .subscribe((response: GenericResponse) => {
          if (response.status.code !== '201') {
            const error = new Error(response.status.description);
            error.name = response.status.code;

            observer.error(new HttpErrorResponse({ error: error, status: Number(response.status.code), statusText: error.message }));
          } else
            observer.next(response);
        }, (error) => {
          console.error('passwordResetRequest error:', error);
          observer.error(error);
        });
    });
  }

  update(payload: PasswordReset, params: { [key: string]: string }): Observable<PasswordResetResponse> {
    return new Observable((observer: Observer<PasswordResetResponse>) => {
      this.http.put('CAND_AUTH_PASSWORD_UPDATE', payload, params)
        .subscribe((response: PasswordResetResponse) => {
          if (response.status.code !== '200') {
            const error = new Error(response.status.description);
            error.name = response.status.code;

            observer.error(new HttpErrorResponse({ error: error, status: Number(response.status.code), statusText: error.message }));
          } else
            observer.next(response);
        }, (error) => {
          console.error('passwordResetUpdate error:', error);
          observer.error(error);
        });
    });
  }
}
