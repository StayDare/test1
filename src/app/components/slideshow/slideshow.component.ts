import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],


})

//class是类
export class SlideshowComponent  implements OnInit {
   current_index: number = 0;//表示当前图片的索引,默认设置第一张作为开始图
  //类里面就有一个 items 用来管理传入的图片
  interval!: number;
  @ViewChild("items_div")//使用items_div
  items_div!: ElementRef<Element>;//表示声明变量,这个变量绝对不会为空
  items!: Element[]
  constructor() { }
  go_left(){
    let to = this.current_index - 1;
    if(to < 0){
      to = this.items.length - 1;
    }
    this.switch(to);
  }
  go_right(){
    let to = this.current_index + 1;
    if(to >= this.items.length){
      to = 0;
    }
    this.switch(to);
  }

  switch (to:number) {  
    this.items[this.current_index].classList.remove('show');
    this.items[to].classList.add('show');
    this.current_index = to;
  }
//window.setInterval用在浏览器，setInterval用在服务器端（node） js可以用在服务器端（node）和浏览器端
  loop(){
    this.interval = window.setInterval(()=>{ this.go_right() },2000)
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.items = [].slice.call( this.items_div.nativeElement.children );
    this.items.forEach((item)=>{item.classList.add("slideitem")});//每个 item 默认隐藏，并且位置绝对且重叠
    this.items[0].classList.add("show");//初始化之后要展示第一张轮播图.get返回有可能为空,加问号就相当于判断是否为空，不为空执行后面的
    this.loop()
}

}

//forEach()方法：需要你传入一个函数，然后他会把列表中每一个值都当成参数在这个函数里面运行一遍，在 js 和 ts 中可以使用闭包来快速创建函数
//(item)=>{item.ClassList.add(heidden)} 这就是一个闭包 闭包是可以赋值给变量的函数
//var a = (item)=>{item.ClassList.add(heidden)},a 就变成了一个函数.可以用a(b) 来运行这个函数.没有固定用法格式
