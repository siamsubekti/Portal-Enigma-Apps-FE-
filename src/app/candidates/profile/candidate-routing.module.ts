import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateProfileComponent } from './components/candidate.profile.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CandidateRoutingModule { }
export const routedComponents = [
  CandidateProfileComponent,
];
