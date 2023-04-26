import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilkyteaPage } from './milkytea.page';

const routes: Routes = [
  {
    path: '',
    component: MilkyteaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilkyteaPageRoutingModule {}
