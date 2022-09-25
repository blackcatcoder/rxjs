import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeType } from './type/EmployeeType';
import { ProductService } from './service/ProductService';

import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { UserService } from './service/UserService';
import { UserType } from './type/UserType';
import { ProductType } from './type/ProductType';
import { ProductDetailType } from './type/ProductDetailType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'rxcommon';

  users: UserType[] = [];
  products: ProductType[] = [];
  productDetail: ProductDetailType | null = null;

  private userSub!: Subscription;
  private productSub!: Subscription;
  private productDetailSub!: Subscription;


    // case 1
    allProduct: ProductType[] = [];

    // case 2
    products$!: Observable<ProductType[]>;


  constructor(
    private productService: ProductService,
    private userService: UserService){}

  ngOnInit(): void {

    this.userSub = this.userService.getAllUser()
      .subscribe(response => {
        console.log("result: ")
        console.log(response);
        this.users = response;
    });

    // case 1
    // this.sub = this.productService.getAllProduct().subscribe(data => {
    //   console.log(data);
    //   this.allProduct = data;
    // })

    // case 2
    //this.products$ = this.productService.products$;
  }

  // selectedCategoryChanged(categoryId: number): void{
  //   this.categorySubject.next(categoryId);
  // }


  getProductByUser(userId: ElementRef){

    this.productDetail = null;

    console.log("userId: ");
    console.log(userId);

    this.productSub = this.productService.getProductByUserId(+userId).subscribe(response => {
      this.products = response;
    });
  }

  getProductDetail(productId: number){
    this.productDetailSub = this.productService.getProductDetail(productId).subscribe(response => {
      this.productDetail = response;
    })
  }

  

  sendCategory(){
    console.log("category click");
    const catId = 1;
    //this.productService.getProductByCategory(catId);
  }


  ngOnDestroy(): void {
    // case 1
    this.userSub.unsubscribe();
    this.productSub.unsubscribe();
    this.productDetailSub.unsubscribe();
  }
}
