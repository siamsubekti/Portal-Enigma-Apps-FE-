import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPagesComponent } from './error-pages.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    ErrorPagesRoutingModule,
  ],
  declarations: [
    ErrorPagesComponent,
    NotFoundComponent,
  ],
})
export class ErrorPagesModule { }
