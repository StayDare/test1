import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantPageRoutingModule } from './restaurant-routing.module';

import { RestaurantPage } from './restaurant.page';
//module是模块 用来组织文件的  page.ts才是页面
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPageRoutingModule
  ],
  declarations: [RestaurantPage]
})
export class RestaurantPageModule {}
