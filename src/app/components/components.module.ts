import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';//将card组件导入(导入的是代码),ngmodule导入的是组件
//如果一个组件的代码没被导入到angular中，需要declarations声明，如果一个模块要用另一个模块声明的组件，需要在import里面导入模块


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
