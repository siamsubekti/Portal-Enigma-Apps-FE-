import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { NbDialogService } from '@nebular/theme';
import { AlertMessage, environment } from '../../../environments/environment';
import { LoginService } from '../services/login.service';
import { Login, LoginResponseData } from '../models/login.model';
import { LoginResponse } from '../models/response.model';
import { StorageService } from '../../shared/utilities/storage.service';
import { ExclamationComponent } from '../../shared/dialogs';

@Component({
  selector: 'ngx-login',
  templateUrl: '../views/login.component.html',
  styleUrls: ['../views/login.scss'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  loadingStatus: string = 'primary';
  loadingMessage: string = 'Logging in..';
  displayAlert: boolean = false;
  loginForm: FormGroup;
  alertMessage: AlertMessage;

  constructor(
    private readonly title: Title,
    // private readonly toastr: NbToastrService,
    private readonly dialog: NbDialogService,
    private readonly router: Router,
    private readonly login: LoginService,
    private readonly storage: StorageService,
  ) {}

  private buildForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    });
  }

  protected form(property): AbstractControl {
    return this.loginForm.get(property);
  }

  ngOnInit() {
    // console.log('message:', this.storage.get('message'));
    this.title.setTitle(`${environment.appName} - Login`);
    if (this.storage.get('message')) {
      this.alertMessage = JSON.parse(this.storage.get('message'));
      this.displayAlert = true;

      this.storage.delete('message');
    }

    this.buildForm();
  }

  ngSubmit(payload: Login, valid: boolean) {
    this.loading = true;
    if (valid) {
      this.displayAlert = false;
      this.alertMessage = null;
      this.login.backend(payload).subscribe((response: LoginResponse) => {
        const { status, data } = response;
        // console.log(response);
        // console.info('Login successful, user:', this.auth.user);
        if (status.code === '200') this.router.navigate(['home']);
        else if (status.code === '422') this.displayDialog(data);
        else {
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

  displayDialog(data: LoginResponseData) {
    this.dialog.open(
      ExclamationComponent,
      {
        hasBackdrop: true,
        closeOnBackdropClick: false,
        closeOnEsc: false,
        context: {
          title: 'Welcome New User!',
          text: `Please <strong>change your account default password</strong> to your preffered one before you can start using this application.`,
        },
      },
    ).onClose.subscribe((action: any) => {
      if (action === true)
        this.router.navigateByUrl(`auth/password/reset/${data.sessionId}`);
    });
  }
}
