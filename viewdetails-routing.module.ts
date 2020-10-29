import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewdetailsPage } from './viewdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ViewdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewdetailsPageRoutingModule {}
