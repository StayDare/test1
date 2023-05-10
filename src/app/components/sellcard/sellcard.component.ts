import { Component, Input, OnInit } from '@angular/core';
import { product, sell } from 'src/app/product.service';

@Component({
  selector: 'app-sellcard',
  templateUrl: './sellcard.component.html',
  styleUrls: ['./sellcard.component.scss'],
})
export class SellcardComponent  implements OnInit {
  @Input() sale?:sell;//表示这个组件接受一个 input 参数,问号表示可以为空，冒号后面表示类型  sale包含秒杀价信息
  @Input() item?:product;//一个卡片只处理单个产品,所以item不加s  item包含图片等信息
  constructor() { }

  ngOnInit() {}

}
