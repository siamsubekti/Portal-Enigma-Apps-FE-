import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { ActivationRegisterComponent } from './register/activation/activation-register.component';
import { UnderConstructionComponent } from './dashboard/under-construction.component';
import { RegisterMessageComponent } from './register/message/register-message.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: './pages/pages.module#PagesModule' }, 
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'register/message', component: RegisterMessageComponent},
  { path: 'register/activation/:key/:token', component: ActivationRegisterComponent},
  { path: 'password-forget', component: PasswordForgetComponent  },
  { path: 'dashboard', component: UnderConstructionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
