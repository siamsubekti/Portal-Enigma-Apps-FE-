import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RouteGuardService } from '../shared/route/route.guard';

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
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
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
