import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { DocumentComponent } from './document/components/document.component';


@NgModule({
  declarations: [DocumentComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule,
  ],
})
export class ResumeModule { }
