import { Component, ViewChild } from '@angular/core';
import { ProductService, product} from '../product.service';
import { IonContent, Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;
  items:product[]
  constructor(private productService:ProductService) {
    this.items = this.productService.getProducts()
  }

  scrollToTop(): void {
    this.content?.scrollToTop(0);
  }

}
