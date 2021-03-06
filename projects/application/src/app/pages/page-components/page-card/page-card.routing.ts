import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageCardExampleComponent,
  PageCardApiComponent,
  PageCardComponent
} from './page-card.component';

export const PageCardRoutes: Routes = [
  {
    path: '',
    component: PageCardExampleComponent,
    outlet: 'example'
  },
  {
    path: '',
    component: PageCardApiComponent,
    outlet: 'api'
  },
  {
    path: '',
    component: PageCardComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageCardRoutes)],
  exports: [RouterModule]
})
export class PageCardRouting { }
