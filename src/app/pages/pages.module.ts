import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbIconModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ErrorPagesModule } from './errors/error-pages.module';
import { HomeComponent } from './home/home.component';
import { AuthModule } from '../auth/auth.module';
import { CandidateModule } from '../candidates/candidate.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule,
    NbCardModule,

    AuthModule,
    ErrorPagesModule,
    CandidateModule,
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
  ],
})
export class PagesModule {}
