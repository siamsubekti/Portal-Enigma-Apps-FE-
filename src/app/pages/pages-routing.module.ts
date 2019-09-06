import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RouteGuardService } from '../shared/route/route.guard';
import { CandidateProfileComponent } from '../candidates/profile/components/candidate.profile.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivateChild: [RouteGuardService],
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'my-profile',
      component: CandidateProfileComponent,
    },
    {
      path : 'my-resume',
      loadChildren: () => import('../candidates/resume/resume.module').then(m => m.ResumeModule),
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
