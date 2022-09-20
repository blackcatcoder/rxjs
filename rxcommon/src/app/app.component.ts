import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeType } from './type/EmployeeType';
import { ProductService } from './service/ProductService';
import { Product } from './type/Product';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'rxcommon';

  // case 1
  private products: Product[] = [];

  // case 2
  products$!: Observable<Product[]>;
  private sub!: Subscription;

  constructor(private productService: ProductService){}

  ngOnInit(): void {

    // case 1
    // this.sub = this.productService.getProducts().subscribe(data => {
    //   console.log(data);
    //   this.products = data;
    // })

    // case 2
    this.products$ = this.productService.products$;
  }

  // selectedCategoryChanged(categoryId: number): void{
  //   this.categorySubject.next(categoryId);
  // }

  ngOnDestroy(): void {
    // case 1
    this.sub.unsubscribe();
  }

  sendCategory(){
    console.log("category click");
    const catId = 1;
    this.productService.getProductByCategory(catId);
  }
}
