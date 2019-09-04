import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RegistrationFormComponent } from './component/registration-form.component';

const routes: Routes = [{
  path: '',
  component: RegistrationComponent,
  children: [{
    path: '',
    redirectTo: 'form',
    pathMatch: 'full',
  },
  {
    path: 'form',
    component: RegistrationFormComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
