import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilkyteaPageRoutingModule } from './milkytea-routing.module';

import { MilkyteaPage } from './milkytea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilkyteaPageRoutingModule
  ],
  declarations: [MilkyteaPage]
})
export class MilkyteaPageModule {}
