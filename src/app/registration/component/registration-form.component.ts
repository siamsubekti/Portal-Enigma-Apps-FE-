import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
// import { Router } from '@angular/router';
import { AlertMessage, AccountStatus } from '../../../environments/environment';
import { RegistrationService } from '../service/registration.service';
import { RegistrationResponse, CaptchaResponseDTO } from '../models/registration-form.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'ngx-regisration',
  templateUrl: '../views/registration.form.html',
  styleUrls: ['../views/registration.scss'],
})
export class RegistrationFormComponent implements OnInit {
  loading: boolean = true;
  displayAlert: boolean = false;
  registrationForm: FormGroup;
  alertMessage: AlertMessage;
  captcha: CaptchaResponseDTO;

  @ViewChild('captchaContainer', { static: true }) captchaContainer: ElementRef;

  constructor(
    // private readonly router: Router,
    private readonly registrationService: RegistrationService,
  ) {}

  private buildForm() {
    this.registrationForm = new FormGroup({
      fullname: new FormControl(null, [ Validators.required, Validators.minLength(5) ]),
      username: new FormControl(null, [ Validators.required, Validators.email ]),
      password: new FormControl(null, [ Validators.required, Validators.minLength(6) ]),
      confirmPassword: new FormControl(null, [ Validators.required, Validators.minLength(6) ]),
      phone: new FormControl(null, [ Validators.required, Validators.minLength(6) ]),
      birthdate: new FormControl(null, [ Validators.required ]),
      captchaAnswer: new FormControl(null, [ Validators.required, Validators.minLength(5) ]),
    });
  }

  form(control: string): AbstractControl {
    return this.registrationForm.get(control);
  }

  getCaptcha() {
    this.registrationService.captcha()
      .subscribe((captcha: CaptchaResponseDTO) => {
        this.captcha = captcha;
        this.captchaContainer.nativeElement.innerHTML = captcha.image;
        this.loading = false;
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

  ngOnInit() {
    this.buildForm();
    this.getCaptcha();
  }

  ngSubmit(payload: any, valid: boolean) {
    if (valid) {
      payload.captcha = { answer: payload.captchaAnswer, token: this.captcha.token };
      delete payload.captchaAnswer;

      this.loading = true;
      this.registrationService.submit(payload)
        .subscribe((response: RegistrationResponse) => {
          const { data } = response;

          this.loading = false;
          if (data.status === AccountStatus.NEW)
            this.alertMessage = {
              status: 'success',
              message: 'Please check your email and follow the instruction to activate your account.',
            };

            this.displayAlert = true;
          // else console.log('data: ', data);
        }, (errorResponse) => {
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
