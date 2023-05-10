import { Injectable } from '@angular/core';

export interface product{
  id:number;
  name:string;
  image:string;
  price:number;
  type:string;
  special:boolean;
}
//定义接口，表示这条秒杀信息对应的产品id，对应的秒杀价格
export interface sell{
  id:number;
  price:number;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products:product[] = [];//定义列表，变量名: 类型 = 初始值
  public sells:sell[] = [];//接口是个类型，类也是类型 所以sell在类型的位置
//定义函数
  getProducts():product[]{ 
    return this.products; 
 } 

//秒杀
 getSpecial(){
  //闭包语法：（参数） =>{代码}
  //闭包要返回一个 bool 值，决定这个是否是精品
   return (this.products.filter((product)=>{
    if(product.special == true) 
    return true;
    else 
    return false})//(product)里面是参数，参数就是你要判断的产品；{} 里面直接当函数内容写
   )
   /*相当于int a(){
            return b();
          }*/
 }
 /*
 函数名 (参数)：返回类型 {
    代码
}
*/ 
//sells 是列表  sell是接口   sell[] 是接口们，一个列表
 getSells():sell[]{
  return this.sells;
 }
//构造函数，一个类只能有一个
 constructor() { 
  this.products = [
    {id:0,name:"炒米粉",image:"./assets/img/chaomifen.jpg",price:12,type:"restaurant",special:true},
    {id:1,name:"披萨",image:"./assets/img/pisa.jpg",price:12,type:"fastfood",special:true},
    {id:2,name:"烤鸭",image:"./assets/img/kaoya.jpg",price:12,type:"restaurant",special:true},
    {id:3,name:"皮蛋粥",image:"./assets/img/pidanzhou.jpg",price:12,type:"restaurant",special:true},
    {id:4,name:"炸鸡",image:"./assets/img/zhaji.jpg",price:12,type:"fastfood",special:true},
    {id:5,name:"蟹堡",image:"./assets/img/xiebao.jpg",price:12,type:"restaurant",special:true},
    {id:6,name:"新疆炒米粉",image:"./assets/img/新疆炒米粉.jpg",price:14,type:"restaurant",special:false},
    {id:7,name:"米酒芝麻汤圆",image:"./assets/img/米酒汤圆.jpg",price:10,type:"restaurant",special:false},
    {id:8,name:"石锅状元鸡块",image:"./assets/img/石锅状元鸡块.jpg",price:16,type:"restaurant",special:false},

  ] 
  this.sells =[
    {id:6,price:7.2},
    {id:7,price:4.88},
    {id:8,price:6.00},

  ]
}
}
