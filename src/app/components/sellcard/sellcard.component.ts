import { Component, Input, OnInit } from '@angular/core';
import { product, sell } from 'src/app/product.service';

@Component({
  selector: 'app-sellcard',
  templateUrl: './sellcard.component.html',
  styleUrls: ['./sellcard.component.scss'],
})
export class SellcardComponent  implements OnInit {
  @Input() sale!:sell;//表示这个组件接受一个 input 参数,问号表示可以为空，冒号后面表示类型  sale包含秒杀价信息
  @Input() item?:product;//一个卡片只处理单个产品,所以item不加s  item包含图片等信息
  time_str = "";
  countDown!: number ;
  ngAterViewInit(){
    this.countDown = this.sale.countDown;
    setInterval(()=>{
      var hour = Math.floor(this.countDown / 3600);
      var minute = Math.floor((this.countDown - hour * 3600) / 60);
      var second = this.countDown - hour * 3600 - minute * 60;
      var hourStr = hour < 10 ? "0" + hour : "" + hour;
      var minuteStr = minute < 10 ? "0" + minute : "" + minute;
      var secondStr = second < 10 ? "0" + second : "" + second;
      this.time_str = hourStr + ":" + minuteStr + ":" + secondStr;
      this.countDown -=1;
},1000)
  }
  constructor() { }

  ngOnInit() {}
  
}
