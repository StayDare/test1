import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],


})

//class是类
export class SlideshowComponent  implements OnInit {
  //类里面就有一个 items 用来管理传入的图片
  @ContentChildren("*")
  items!: QueryList<Element>;//表示声明变量,但可以不赋初始值
  constructor() { }

  ngOnInit() {
    this.items.forEach((item)=>{item.classList.add("item")});//每个 item 默认隐藏，并且位置绝对且重叠
    this.items.get(0)?.classList.add("show");//初始化之后要展示第一张轮播图.get返回有可能为空,加问号就相当于判断是否为空，不为空执行后面的

  }

}

//forEach()方法：需要你传入一个函数，然后他会把列表中每一个值都当成参数在这个函数里面运行一遍，在 js 和 ts 中可以使用闭包来快速创建函数
//(item)=>{item.ClassList.add(heidden)} 这就是一个闭包 闭包是可以赋值给变量的函数
//var a = (item)=>{item.ClassList.add(heidden)},a 就变成了一个函数.可以用a(b) 来运行这个函数.没有固定用法格式
