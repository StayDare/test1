import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService, product } from '../product.service';
import { IonList } from '@ionic/angular';

//module是模块 用来组织文件的  page.ts才是页面
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  @ViewChild('signshop', { read: ElementRef<Element> })
  signshop!: ElementRef<Element>;
  allProducts!: product[]; //所有中餐产品
  showProducts!: product[]; //当前展示产品
  presentShop!: string;
  items!: Element[];
  //constructor相当于初始化
  constructor(private productService: ProductService) {
    this.allProducts = this.productService.getType('restaurant');
    this.showProducts = this.productService.getType('restaurant');
    this.presentShop = 'restaurant';
  }
  getShowShop(shop: string) {
    this.showProducts = this.productService.getShop('restaurant', shop);
  }
  //切换，用户点击目录的按钮
  switch(shop: string) {
    if (this.presentShop == shop) {
      this.showProducts = this.productService.getType('restaurant');
      this.items
        .find((item) => item.firstElementChild?.textContent === shop)
        ?.classList.remove('showshop');
      this.presentShop = 'restaurant';
    } else {
      this.showProducts = this.productService.getShop('restaurant', shop);
      this.items
        .find((item) => item.firstElementChild?.textContent == this.presentShop)
        ?.classList.remove('showshop');
      this.items
        .find(
          (item) => item.firstElementChild?.textContent == shop //firstElementChild?访问第一个子元素，innerHTML 访问 label里面的文字，这就是获取每一个item的商店
        )
        ?.classList.add('showshop');
      this.presentShop = shop;
    }
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.items = [].slice.call(this.signshop.nativeElement.children);
  }
}
