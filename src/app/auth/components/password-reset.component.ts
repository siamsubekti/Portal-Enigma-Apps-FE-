import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
// import { NbDialogService } from '@nebular/theme';
import { AlertMessage, environment } from '../../../environments/environment';
import { PasswordResetResponse } from '../models/response.model';
import { PasswordResetService } from '../services/password-reset.service';
import { PasswordReset } from '../models/password-reset.model';
import { StorageService } from '../../shared/utilities/storage.service';

@Component({
  selector: 'ngx-password-reset',
  templateUrl: '../views/password-reset.component.html',
  styleUrls: ['../views/login.scss'],
})
export class PasswordResetComponent implements OnInit {
  loading: boolean = false;
  loadingStatus: string = 'primary';
  loadingMessage: string = 'Logging in..';
  displayAlert: boolean = false;
  passwordForm: FormGroup;
  alertMessage: AlertMessage;
  key: string;
  token: string;

  constructor(
    private readonly title: Title,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly storageService: StorageService,
    private readonly passwordReset: PasswordResetService,
  ) {}

  private buildForm() {
    this.passwordForm = new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    });
  }

  form(property): AbstractControl {
    return this.passwordForm.get(property);
  }

  ngOnInit() {
    // console.log('message:', this.storage.get('message'));
    this.title.setTitle(`${environment.appName} - Account Password Reset`);
    this.key = this.activatedRoute.snapshot.paramMap.get('key');
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    this.buildForm();

    this.alertMessage = { status: 'info', message: 'Please provide a new password for this account.'};
    this.displayAlert = true;
  }

  ngSubmit(payload: PasswordReset, valid: boolean) {
    this.loading = true;
    if (valid) {
      this.displayAlert = false;
      this.alertMessage = null;
      this.passwordReset.update(payload, { key: this.key, token: this.token }).subscribe((response: PasswordResetResponse) => {
        const { status } = response;
        if (status.code === '200') {
          const message: AlertMessage = { status: 'success', message: 'Your password has been updated!' };
          this.storageService.set('message', JSON.stringify(message));
          this.router.navigateByUrl('auth/login');
        } else {
          this.loading = false;
          this.alertMessage = {
            status: 'warning',
            message: 'Sumting wong! Help!',
          };
        }
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
