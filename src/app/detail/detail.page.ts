import { Component, OnInit } from '@angular/core';
import { ProductService,product} from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  showProduct?:product;
  a!:number;
  change:number = 1;
  constructor(private productService:ProductService,private route: ActivatedRoute) {}
  //改变数量
  setChange(amount:string){
      if(amount = "add" ){
          this.change++;    
      }
      else if(amount = "remove"){
         this.change--;    
      }
      
  }
  ngOnInit() {
    this.a = Number(this.route.snapshot.paramMap.get('id'));
    this.showProduct = this.productService.getById(this.a);
  }

}
