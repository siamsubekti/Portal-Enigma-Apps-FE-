import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login.component';
import { ForgotPasswordComponent } from './components/forgot-password.component';
import { PasswordResetComponent } from './components/password-reset.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'password/forgot',
        component: ForgotPasswordComponent,
      },
      {
        path: 'password/reset/:key/:token',
        component: PasswordResetComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AuthRoutingModule { }
export const routedComponents = [
  AuthComponent,
  LoginComponent,
  ForgotPasswordComponent,
  PasswordResetComponent,
];
