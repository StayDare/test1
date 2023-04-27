import { Component } from '@angular/core';
import { ProductService, product} from '../product.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
items:product[]
  constructor(private productService:ProductService) {
    this.items = this.productService.getProducts()
  }

}
