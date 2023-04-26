import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children:[
      //home
      {
        path: 'milkytea',
        loadChildren:() => import('../milkytea/milkytea.module').then(m => m.MilkyteaPageModule)
      },
      {
        path: 'restaurant',
        loadChildren:() => import('../restaurant/restaurant.module').then(m => m.RestaurantPageModule)
      },
      {
        path: 'fastfood',
        loadChildren:() => import('../fastfood/fastfood.module').then(m => m.FastfoodPageModule)
      },
      {
        path: 'home',
        loadChildren:() => import('../home/home.module').then(m => m.HomePageModule)
      }
    ]
  },

  {
    path:'',
    redirectTo:'/tab/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabPageRoutingModule {}
