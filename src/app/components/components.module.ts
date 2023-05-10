import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';//将card组件导入(导入的是代码),ngmodule导入的是组件
//如果一个组件的代码没被导入到angular中，需要declarations声明，如果一个模块要用另一个模块声明的组件，需要在import里面导入模块
import { SlideshowComponent } from './slideshow/slideshow.component';
import { IonicModule } from '@ionic/angular';
import { SellcardComponent } from './sellcard/sellcard.component';

@NgModule({
  declarations: [CardComponent,SlideshowComponent,SellcardComponent],//是个列表，加进去成为列表的一个值
  imports: [
    IonicModule,
    CommonModule,
  ],//imports 是用来导入其他 ngmodule的
  exports:[CardComponent,SlideshowComponent,SellcardComponent]
})
export class ComponentsModule { }
