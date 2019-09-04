import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
// import { Router } from '@angular/router';
import { AlertMessage, AccountStatus } from '../../../environments/environment';
import { RegistrationService } from '../service/registration.service';
import { RegistrationForm, RegistrationResponse } from '../models/registration-form.model';


@Component({
  selector: 'ngx-regisration',
  templateUrl: '../views/registration.form.html',
  styleUrls: ['../views/registration.scss'],
})
export class RegistrationFormComponent implements OnInit {
  loading: boolean = false;
  displayAlert: boolean = false;
  registrationForm: FormGroup;
  alertMessage: AlertMessage;

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
      birthDate: new FormControl(null, [ Validators.required ]),
    });
  }

  form(control: string): AbstractControl {
    return this.registrationForm.get(control);
  }

  ngOnInit() {
    this.buildForm();
  }

  ngSubmit(payload: RegistrationForm, valid: boolean) {
    if (valid) {
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
