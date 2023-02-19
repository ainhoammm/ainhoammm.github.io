import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvContainerComponent } from './containers/cv-container/cv-container.component';

const routes: Routes = [
  { path: '', component: CvContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
