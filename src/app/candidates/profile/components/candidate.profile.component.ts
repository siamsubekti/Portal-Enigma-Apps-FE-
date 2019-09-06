import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { environment, ProfileGender, ProfileReligion, ProfileMaritalStatus, AlertMessage } from '../../../../environments/environment';
import { CandidateProfileService } from '../services/candidate-profile.service';
import { Account, AccountProfile } from '../../../master/models';
import { HttpErrorResponse } from '@angular/common/http';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-candidate-profile',
  templateUrl: '../views/candidate-profile.component.html',
  styleUrls: ['../views/candidate-profile.scss'],
})
export class CandidateProfileComponent implements OnInit {
  env = environment;
  loading: boolean = false;
  displayAlert: boolean = false;
  hiddenInput: boolean = true;
  hiddenText: boolean = false;
  account: Account;
  candidateForm: FormGroup;
  alertMessage: AlertMessage;
  genders = Object.values(ProfileGender);
  religions = Object.values(ProfileReligion);
  maritalStatuses = Object.values(ProfileMaritalStatus);

  constructor(
    private readonly candidateService: CandidateProfileService,
    private readonly toastr: NbToastrService,
  ) {}

  private buildForm() {
    const { profile } = this.account;
    this.candidateForm = new FormGroup({
      accountType: new FormControl(this.account.accountType),
      username: new FormControl(this.account.username),
      fullname: new FormControl(profile.fullname, [ Validators.required ]),
      nickname: new FormControl(profile.nickname, [ Validators.required ]),
      email: new FormControl(profile.email, [ Validators.required, Validators.email ]),
      phone: new FormControl(profile.phone, [ Validators.required, Validators.minLength(8) ]),
      birthdate: new FormControl(profile.birthdate, [ Validators.required ]),
      gender: new FormControl(profile.gender, [ Validators.required ]),
      religion: new FormControl(profile.religion, [ Validators.required ]),
      maritalStatus: new FormControl(profile.maritalStatus, [ Validators.required ]),
    });
  }

  ngOnInit() {
    this.account = this.candidateService.profile;
    this.buildForm();
  }

  ngToggleEdit() {
    this.hiddenInput = !this.hiddenInput;
    this.hiddenText = !this.hiddenText;
  }

  ngSubmitForm(form: AccountProfile, valid: boolean) {
    if (valid) {
      this.loading = true;
      this.displayAlert = false;
      this.alertMessage = null;
      this.candidateService.update(form)
        .subscribe((account: Account) => {
          if (account) {
            this.toastr.success('Your profile has been updated.', 'Profile Updated.');
            this.account = account;
          } else
            this.toastr.danger('Unable to update your profile data due to unknown error.', 'Warning');

          this.ngToggleEdit();
          this.loading = false;
        }, (errorResponse: HttpErrorResponse) => {
          const { error } = errorResponse;
          console.error(error);

          if (error.status) {
            this.alertMessage = {
              status: 'danger',
              message: error.status.description,
            };
            this.displayAlert = true;
          }

          this.loading = false;
          this.toastr.danger('Unable to update your profile, check the displayed error message.', 'Error');
        });
    }
  }

  form(control: 'username' | 'fullname' | 'nickname' | 'email' | 'phone' | 'birthdate' | 'gender' | 'religion' | 'maritalStatus'): AbstractControl {
    return this.candidateForm.get(control);
  }
}
