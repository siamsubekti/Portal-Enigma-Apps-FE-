import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NbMenuModule, NbIconModule, NbCardModule, NbSpinnerModule, NbAlertModule, NbButtonModule } from '@nebular/theme';
import { AuthModule } from '../../auth/auth.module';
import { ErrorPagesModule } from '../../pages/errors/error-pages.module';
import { CandidateProfileComponent } from './components/candidate.profile.component';
import { CandidateProfileService } from './services/candidate-profile.service';
import { SharedModule } from '../../shared/shared.module';

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
    NgSelectModule,

    SharedModule,
    AuthModule,
    ErrorPagesModule,
  ],
  declarations: [ CandidateProfileComponent ],
  providers: [ CandidateProfileService ],
})
export class CandidateProfileModule {}
