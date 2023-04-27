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
    {id:0,name:"炒米粉",image:"1",price:12,type:"restaurant"},
    {id:1,name:"披萨",image:"2",price:12,type:"fastfood"},
    {id:2,name:"烤鸭",image:"3",price:12,type:"restaurant"},
    {id:3,name:"皮蛋粥",image:"4",price:12,type:"restaurant"},
    {id:4,name:"炸鸡",image:"5",price:12,type:"fastfood"},
    {id:5,name:"蟹堡",image:"6",price:12,type:"restaurant"},
   
  ] 
}
}
