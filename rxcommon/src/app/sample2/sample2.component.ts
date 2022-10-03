import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from '../type/ProductType';
import { Product2Service } from './service/Product2Service';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {

  // products$!: Observable<ProductType[]>;

  // constructor(private product2Service: Product2Service) { }

  ngOnInit(): void {
   
  }

  // getProductByUserName(userName: string){
  //   this.product2Service.getProductByUserName(userName);
  // }


}
