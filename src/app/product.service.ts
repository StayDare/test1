import { Injectable } from '@angular/core';

export interface product{
  id:number;
  name:string;
  image:string;
  price:number;
  type:string;
  special:boolean;
  shop:string;
}
//定义接口，表示这条秒杀信息对应的产品id，对应的秒杀价格
export interface sell{
  id:number;
  price:number;
  countDown:number;
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
 } //获取某一店铺的产品
getShop(type:string,shop:string){

}
//获取某一类产品
getType(type:string){

  return(this.products.filter((product)=>{
    if(product.type == type)  //用产品的type和传入的type对比
    return true;
    else
    return false;
  }))
}
//秒杀
 getSpecial(){
  //闭包语法：（参数） =>{代码}
  //闭包要返回一个 bool 值，决定这个是否是精品
  //filter 里面闭包的作用，是filter拿着一个产品去问这个闭包，闭包告诉他什么
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
    {id:0,name:"炒米粉",image:"./assets/img/chaomifen.jpg",price:12,type:"restaurant",special:true,shop:"新疆炒米粉"},
    {id:1,name:"披萨",image:"./assets/img/pisa.jpg",price:12,type:"fastfood",special:true,shop:"披萨"},
    {id:2,name:"烤鸭",image:"./assets/img/kaoya.jpg",price:12,type:"restaurant",special:true,shop:"北京烤鸭"},
    {id:3,name:"皮蛋粥",image:"./assets/img/pidanzhou.jpg",price:12,type:"restaurant",special:true,shop:"粥传"},
    {id:4,name:"炸鸡",image:"./assets/img/zhaji.jpg",price:12,type:"fastfood",special:true,shop:"汉堡炸鸡"},
    {id:5,name:"蟹堡",image:"./assets/img/xiebao.jpg",price:12,type:"restaurant",special:true,shop:"蟹肉煲"},
    {id:6,name:"新疆炒米粉",image:"./assets/img/新疆炒米粉.jpg",price:14,type:"restaurant",special:false,shop:"新疆炒米粉"},
    {id:7,name:"米酒芝麻汤圆",image:"./assets/img/米酒汤圆.jpg",price:10,type:"restaurant",special:false,shop:"粥传"},
    {id:8,name:"石锅状元鸡块",image:"./assets/img/石锅状元鸡块.jpg",price:16,type:"restaurant",special:false,shop:"鸡公煲"},
    {id:9,name:"泡椒猪肝盖饭",image:"./assets/img/泡椒猪肝盖饭.jpg",price:14,type:"restaurant",special:false,shop:"盖浇饭"},
    {id:10,name:"炝炒土豆丝盖饭",image:"./assets/img/炝炒土豆丝盖饭.jpg",price:14,type:"restaurant",special:false,shop:"盖浇饭"},
    {id:11,name:"青椒肉丝盖饭",image:"./assets/img/青椒肉丝盖饭.jpg",price:14,type:"restaurant",special:false,shop:"盖浇饭"},
    {id:12,name:"肉沫茄子盖饭",image:"./assets/img/肉沫茄子盖饭.jpg",price:13,type:"restaurant",special:false,shop:"盖浇饭"},
    {id:13,name:"蒜苔肉丝盖饭",image:"./assets/img/蒜苔肉丝盖饭.jpg",price:15,type:"restaurant",special:false,shop:"盖浇饭"},
    {id:14,name:"特色鲜椒鱼+米饭",image:"./assets/img/特色鲜椒鱼+米饭.jpg",price:17,type:"restaurant",special:false,shop:"盖浇饭"},
    {id:15,name:"豆干回锅肉盖饭",image:"./assets/img/豆干回锅肉.jpg",price:15,type:"restaurant",special:false,shop:"盖浇饭"},
    {id:16,name:"土豆红烧肉+米饭",image:"./assets/img/土豆红烧肉+米饭.jpg",price:18,type:"restaurant",special:false,shop:"盖浇饭"},
    {id:17,name:"黑椒肉肠饭",image:"./assets/img/黑胶肉肠饭.jpg",price:12,type:"restaurant",special:false,shop:"牧童烤鸭饭"},
    {id:18,name:"烧白套饭",image:"./assets/img/烧白套饭.jpg",price:14,type:"restaurant",special:false,shop:"牧童烤鸭饭"},
    {id:19,name:"重庆辣子鸡套餐",image:"./assets/img/重庆辣子鸡.jpg",price:14,type:"restaurant",special:false,shop:"牧童烤鸭饭"},
    {id:20,name:"爆椒鸡丁套饭",image:"./assets/img/爆椒鸡丁.jpg",price:13,type:"restaurant",special:false,shop:"牧童烤鸭饭"},
    {id:21,name:"黑椒里脊套饭",image:"./assets/img/黑椒里脊.jpg",price:12,type:"restaurant",special:false,shop:"牧童烤鸭饭"},
    {id:22,name:"里脊拼鱼香肉丝",image:"./assets/img/里脊拼鱼香肉丝.jpg",price:15,type:"restaurant",special:false,shop:"牧童烤鸭饭"},
    {id:23,name:"海鲜铁板炒饭",image:"./assets/img/海鲜铁板.jpg",price:17,type:"restaurant",special:false,shop:"海鲜炒饭"},
    {id:24,name:"香辣口味虾仁铁板炒饭",image:"./assets/img/虾仁铁板.jpg",price:14.5,type:"restaurant",special:false,shop:"海鲜炒饭"},
    {id:25,name:"肉宴海鲜铁板炒饭",image:"./assets/img/肉宴海鲜.jpg",price:17,type:"restaurant",special:false,shop:"海鲜炒饭"},
    {id:26,name:"蒜蓉粉丝扇贝铁板炒饭",image:"./assets/img/蒜蓉粉丝.jpg",price:18,type:"restaurant",special:false,shop:"海鲜炒饭"},
    {id:27,name:"炭烧鱿鱼须铁板炒饭",image:"./assets/img/鱿鱼须.jpg",price:15,type:"restaurant",special:false,shop:"海鲜炒饭"},
    {id:28,name:"海虾鱿鱼铁板炒饭",image:"./assets/img/海虾鱿鱼.jpg",price:22,type:"restaurant",special:false,shop:"海鲜炒饭"},
    {id:29,name:"滑蛋虾仁菠萝炒饭",image:"./assets/img/滑蛋菠萝.jpg",price:15,type:"restaurant",special:false,shop:"海鲜炒饭"},
    {id:30,name:"海鲜菠萝炒饭",image:"./assets/img/海鲜菠萝.jpg",price:17,type:"restaurant",special:false,shop:"海鲜炒饭"},
    {id:31,name:"猪脚饭",image:"./assets/img/猪脚饭.jpg",price:17,type:"restaurant",special:false,shop:"猪脚饭"},
    {id:32,name:"葱油肉拌面",image:"./assets/img/葱油.jpg",price:13,type:"restaurant",special:false,shop:"葱油拌面"},
    {id:33,name:"孜然牛肉炒饭",image:"./assets/img/牛肉炒饭.jpg",price:13,type:"restaurant",special:false,shop:"炒饭"},
    {id:33,name:"牛肉刀削汤面",image:"./assets/img/牛肉面.jpg",price:10,type:"restaurant",special:false,shop:"牛肉面"},
  ] 
  this.sells =[
    {id:6,price:7.2,countDown:1800},
    {id:7,price:4.88,countDown:1800},
    {id:8,price:6.00,countDown:1800},

  ]
}
}
