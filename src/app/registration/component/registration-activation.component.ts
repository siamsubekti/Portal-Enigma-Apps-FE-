import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { AlertMessage } from '../../../environments/environment';
import { RegistrationService } from '../service/registration.service';
import { RegistrationResponse } from '../models/registration-form.model';

@Component({
  selector: 'ngx-register-activation',
  templateUrl: '../views/registration.activation.html',
  styleUrls: ['../views/registration.scss'],
})
export class RegistrationActivationComponent implements OnInit {
  loading: boolean = true;
  displayAlert: boolean = false;
  accountActivated: boolean = false;
  alertMessage: AlertMessage = {
    status: 'info',
    message: 'Processing your request...',
  };

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly registerService: RegistrationService) {}

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        const { key, token } = params;

        if ( !key && !token ) {
          this.loading = false;
          this.alertMessage = {
            message: 'Invalid registration activation credentials.',
            status: 'danger',
          };
          this.displayAlert = true;
        } else this.registerService.activate(key, token)
          .subscribe((response: RegistrationResponse) => {
            const { data } = response;

            if (data && data.accountId && data.status) {
              this.alertMessage = {
                message: 'Your account has been activated.',
                status: 'success',
              };
              this.loading = false;
              this.displayAlert = true;
              this.accountActivated = true;
            }
          }, (errorResponse: HttpErrorResponse) => {
            const { error, status, statusText } = errorResponse;
            let message: string = `${statusText} (${status}).`;

            if (error) {
              const { status: errorStatus } = error;
              message = `${errorStatus.description}`;
            }

            this.alertMessage = { message, status: 'danger' };
            this.loading = false;
            this.displayAlert = true;
          });
      });
  }
}
