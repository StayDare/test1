import { Injectable } from '@angular/core';

export interface product{
  id:number;
  name:string;
  image:string;
  price:number;
  type:string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products:product[] = [];
//定义函数
  getProducts():product[]{ 
    return this.products; 
 } 
//构造函数，一个类只能有一个
 constructor() { 
  this.products = [
    {id:0,name:"炒米粉",image:"./assets/img/chaomifen.jpg",price:12,type:"restaurant"},
    {id:1,name:"披萨",image:"./assets/img/pisa.jpg",price:12,type:"fastfood"},
    {id:2,name:"烤鸭",image:"./assets/img/kaoya.jpg",price:12,type:"restaurant"},
    {id:3,name:"皮蛋粥",image:"./assets/img/pidanzhou.jpg",price:12,type:"restaurant"},
    {id:4,name:"炸鸡",image:"./assets/img/zhaji.jpg",price:12,type:"fastfood"},
    {id:5,name:"蟹堡",image:"./assets/img/xiebao.jpg",price:12,type:"restaurant"},
   
  ] 
}
}
