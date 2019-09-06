import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RegistrationFormComponent } from './component/registration-form.component';
import { RegistrationActivationComponent } from './component/registration-activation.component';

const routes: Routes = [{
  path: '',
  component: RegistrationComponent,
  children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'candidate',
    },
    {
      path: 'candidate',
      component: RegistrationFormComponent,
    },
    {
      path: 'activation/:key/:token',
      component: RegistrationActivationComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
