import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { NbButtonModule, NbInputModule, NbSpinnerModule, NbAlertModule, NbLayoutModule, NbIconModule, NbCardModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule, routedComponents } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { PasswordResetService } from './services/password-reset.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    ThemeModule,
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    NbSpinnerModule,
    NbAlertModule,
    NbIconModule,
    AuthRoutingModule,
    SharedModule,
  ],
  providers: [AuthService, LoginService, PasswordResetService],
  declarations: [...routedComponents],
})
export class AuthModule { }
