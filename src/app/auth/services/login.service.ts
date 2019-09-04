import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { environment as env, HttpMethod } from '../../../environments/environment';
import { HttpService } from '../../shared/http/http.service';
import { AuthService } from './auth.service';
import { Service } from '../../master/models';
import { Login } from '../models/login.model';
import { LoginResponse, AccountPrivilegeResponse } from '../models/response.model';
import { Privilege } from '../models/privilege.model';

@Injectable()
export class LoginService {
  constructor(
    private readonly authService: AuthService,
    private http: HttpService,
  ) { }

  backendLogout(): Observable<boolean> {
    let logout: Service = new Service();
    logout = Object.assign(logout, env.services.logout);

    return new Observable((observer: Observer<boolean>) => {
      this.http.delete('AUTH_LOGOUT')
        .subscribe(() => {
          observer.next(true);
        }, (error) => {
          observer.error(error);
        });
    });
  }

  backend(payload: Login): Observable<LoginResponse> {
    return new Observable((observer: Observer<LoginResponse>) => {
      let login: Service = new Service();
      login = Object.assign(login, env.services.login);

      this.http.post('CAND_AUTH_LOGIN', payload).subscribe( // request(HttpMethod.POST, login, payload).subscribe(
        (loginResponse: LoginResponse) => {
          if (loginResponse.status.code !== '200') {
            const error = new Error(loginResponse.status.description);
            error.name = loginResponse.status.code;

            observer.error(new HttpErrorResponse({ error: error, status: Number(loginResponse.status.code), statusText: error.message }));
          } else {
            const { sessionId, redirectTo: privilege } = loginResponse.data;
            this.http.request(HttpMethod.GET, privilege).subscribe(
              (privilegeResponse: AccountPrivilegeResponse) => {
                if (privilegeResponse.status.code !== '200') {
                  const error = new Error(privilegeResponse.status.description);
                  error.name = privilegeResponse.status.code;

                  observer.error(new HttpErrorResponse({ error: error, status: Number(privilegeResponse.status.code), statusText: error.message }));
                } else {
                  this.storeAuthenticationData(sessionId, privilegeResponse.data);

                  observer.next(loginResponse);
                }
              },
              (error) => {
                console.error('privilegeService error:', error);
                observer.error(error);
              },
            );
          }
        },
        (error) => {
          console.error('loginService error:', error);
          if (error.status === 422) observer.next(error.error as LoginResponse);
          observer.error(error);
        },
      );
    });
  }

  private storeAuthenticationData(id: string, data: Privilege): boolean {
    try {
      this.authService.id = id;
      this.authService.auth = {
        id,
        sessionExpired: moment().add(env.sessionExpiration, 'minutes').valueOf(),
        authenticated: true,
        data,
      };

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
