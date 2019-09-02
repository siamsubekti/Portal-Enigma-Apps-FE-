import { Component } from '@angular/core';

@Component({
  selector: 'ngx-auth',
  template: `
    <ngx-fullwidth-layout [classes]="classes">
      <router-outlet></router-outlet>
    </ngx-fullwidth-layout>
  `,
})
export class AuthComponent {
  classes: string = 'login-page';
}
