import { Component, OnInit } from '@angular/core';
import { ProductService, product} from '../product.service';

//module是模块 用来组织文件的  page.ts才是页面
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  allProducts!:product[];//所有中餐产品
  showProducts!:product[];//当前展示产品
  presentShop!:string;
  //constructor相当于初始化
  constructor(private productService:ProductService) { 
    this.allProducts = this.productService.getType("restaurant");
    this.showProducts = this.productService.getType("restaurant");

  }
  getShowShop(shop:string){
    this.showProducts =this.productService.getShop("restaurant",shop);
  }
  //切换，用户点击目录的按钮
  switch(shop:string){

  }

  ngOnInit() {
  }

}
