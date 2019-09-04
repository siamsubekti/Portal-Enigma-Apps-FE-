import { Component } from '@angular/core';

@Component({
  selector: 'ngx-registration',
  template: `
    <ngx-fullwidth-layout [classes]="classes">
      <router-outlet></router-outlet>
    </ngx-fullwidth-layout>
  `,
})
export class RegistrationComponent {
  classes: string = 'login-page';
}
