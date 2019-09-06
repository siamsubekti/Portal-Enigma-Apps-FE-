import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { DocumentComponent } from './document/components/document.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbMenuModule, NbIconModule, NbCardModule, NbButtonModule, NbSpinnerModule, NbAlertModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [DocumentComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    CommonModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule,
    NbCardModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbSpinnerModule,
    SharedModule,
    NbAlertModule,
    NgSelectModule,
  ],
})
export class ResumeModule { }
