import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbMenuModule, NbIconModule, NbCardModule, NbSpinnerModule, NbAlertModule, NbButtonModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { AuthModule } from '../auth/auth.module';
import { ErrorPagesModule } from '../pages/errors/error-pages.module';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationService } from './service/registration.service';
import { RegistrationComponent } from './registration.component';
import { RegistrationFormComponent } from './component/registration-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule,
    NbCardModule,
    NbSpinnerModule,
    NbAlertModule,
    NbButtonModule,

    AuthModule,
    ErrorPagesModule,

    RegistrationRoutingModule,
  ],
  providers: [ RegistrationService ],
  declarations: [ RegistrationComponent, RegistrationFormComponent ],
})
export class RegistrationModule {}
