import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {DatasetService} from '../../dataset.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productData:DatasetService) {
    
    
   }
   public show = false;
   product:any = this.productData.products;
   tit :any;
   desc:any;
   quan:any;
   value:any;
  ngOnInit() {
    
  }
  deleteData(i:any){
    this.productData.products.splice(i,1);
  }
  edit(){
    this.show = !this.show;
  }
  submitbutton(ind:any, myform:NgForm){
    this.productData.products[ind].title = this.tit;
    this.productData.products[ind].quantity = this.quan;
    this.productData.products[ind].description = this.desc;
    myform.resetForm(this.value);
    this.show = !this.show;
  }
}
