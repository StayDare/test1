import { Component, OnInit ,Input} from '@angular/core';
import{ product } from 'src/app/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  @Input() item?:product;//表示这个组件接受一个 input 参数,问号表示可以为空，冒号后面表示类型
  @Input() clicksrc?: string;
  constructor() { }

  ngOnInit() {}

}
