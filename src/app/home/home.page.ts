import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductService, product,sell} from '../product.service';
import { IonButton, IonContent, Platform } from '@ionic/angular';

interface sellProduct{
  s:sell,
  p:product
  }
//修饰器就是为了给类做标记
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  @ViewChild(IonContent) content!: IonContent;
  hide = "hide";
  items:product[]
  sales: sell[];
  sellsWithProduct:sellProduct[] ;
  state: number = 0;
  constructor(private productService:ProductService) {
    this.items = this.productService.getSpecial();
    this.sales = this.productService.getSells();
    var a :sellProduct[] =[];
    var b = this.productService.getProducts();//获取所有产品
    this.sales.forEach((message)=>{//foreach 闭包参数 是一个单条秒杀信息
      var c = b.find((single) => {//find这个闭包的参数是单条产品
        return single.id == message.id//这代表，秒杀里面的id和产品的id 对上了  双等号是判断 判断是否一样，单等号是赋值
      });
      a.push({s:message,p:c!})
;//把对好的秒杀信息和对应的产品做成一个对，放到列表里面
    })//一个单条秒杀信息
    this.sellsWithProduct = a;
  }
//一键返回顶部，是调用的 ion-content 来实现的滚动
  scrollToTop(): void {
    this.content?.scrollToTop(0);
  }
  //下划线不是驼峰命名法的规则，是 snakecase的规则
  buttonPressed(){
    if(this.state == 1){
      this.hide = "hide"
      this.state = 0;
      this.scrollToTop();
    }
//当前状态为0，函数里面是按下按钮调用 调用的时候 需要更新了让状态变成1 
    else if(this.state == 0){
      this.hide = ""
      this.state = 1;
      setTimeout(()=>{
        this.hide = "hide"
        this.state = 0;
      },3000)
    }
  

  }

}
