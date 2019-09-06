import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NbMenuModule, NbIconModule, NbCardModule, NbSpinnerModule, NbAlertModule, NbButtonModule } from '@nebular/theme';
import { AuthModule } from '../../auth/auth.module';
import { ErrorPagesModule } from '../../pages/errors/error-pages.module';

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
  ],
})
export class CandidateProfileModule {}
