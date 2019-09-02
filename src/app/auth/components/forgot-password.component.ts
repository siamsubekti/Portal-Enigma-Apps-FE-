import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AlertMessage, environment } from '../../../environments/environment';
import { PasswordResetService } from '../services/password-reset.service';
import { GenericResponse } from '../../shared/http/responses.model';

@Component({
  selector: 'ngx-forgot-password',
  templateUrl: '../views/forgot-password.component.html',
  styleUrls: ['../views/login.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  successful: boolean = false;
  loading: boolean = false;
  loadingStatus: string = 'primary';
  loadingMessage: string = 'Logging in..';
  displayAlert: boolean = false;
  forgetfulForm: FormGroup;
  alertMessage: AlertMessage;
  key: string;
  token: string;

  constructor(
    private readonly title: Title,
    private readonly router: Router,
    private readonly passwordReset: PasswordResetService,
  ) {}

  private buildForm() {
    this.forgetfulForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
    });
  }

  protected form(property): AbstractControl {
    return this.forgetfulForm.get(property);
  }

  ngOnInit() {
    // console.log('message:', this.storage.get('message'));
    this.title.setTitle(`${environment.appName} - Account Forgot Password`);
    this.buildForm();

    this.alertMessage = { status: 'info', message: 'Please enter a registered email address for your account.'};
    this.displayAlert = true;
  }

  ngRedirect() {
    this.router.navigateByUrl('auth/login');
  }

  ngSubmit(payload: { username: string }, valid: boolean) {
    this.loading = true;
    if (valid) {
      this.displayAlert = false;
      this.alertMessage = null;
      this.passwordReset.request(payload).subscribe((response: GenericResponse) => {
        const { status, data } = response;

        if (status.code === '201' && data === true) {
          this.alertMessage = {
            status: 'success',
            message: 'Please check your email and follow the instructions.',
          };

          this.successful = data;
        } else {
          this.alertMessage = {
            status: 'warning',
            message: 'Sumting wong! Help!',
          };
        }

        this.loading = false;
        this.displayAlert = true;
      }, (errorResponse: HttpErrorResponse) => {
        const { error: { status } } = errorResponse;

        this.loading = false;
        this.alertMessage = {
          status: 'danger',
          message: `${status.description}`,
        };

        this.displayAlert = true;
      });
    }
  }
}
