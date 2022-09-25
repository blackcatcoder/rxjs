import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, Subject, switchMap, tap } from "rxjs";
import { CategoryType } from "../type/CategoryType";
import { ProductDetailType } from "../type/ProductDetailType";
import { ProductType } from "../type/ProductType";



@Injectable({providedIn: 'root'})
export class ProductService{

    private productUrl = "http://localhost:8080";

    private categorySubject = new Subject<number>();
    categorySelectedAction$ = this.categorySubject.asObservable();

    constructor(private http: HttpClient){}

    // case 1
    // getProducts(): Observable<Product[]>{
    //     return this.http.get<Product[]>(this.productUrl)
    //         .pipe(tap(data => console.log(data)));
    // }

    // case 2
    // products$ = this.http.get<Product[]>(this.productUrl)
    //     .pipe(tap(data => console.log(data)));

    // case 3
    // products$ = this.categorySelectedAction$.pipe(
    //     switchMap(catId => this.http.get<ProductType[]>(`${this.productstUrl}/${catId}`)
    //     .pipe(
    //         tap(data => console.log(data))
    // )));

    // getProductByCategory(catId: number){
    //     this.categorySubject.next(catId);
    // }

    getAllProduct(){
        return this.http.get<ProductType[]>(`${this.productUrl}/product/getAll`);
    }

    handleError(){
        console.log("something went wrong");
    }

    getProductByUserId(userId: number){
        return this.http.get<ProductType[]>(`${this.productUrl}/user/${userId}/products`);
    }

    getProductDetail(productId: number){
        return this.http.get<ProductDetailType>(`${this.productUrl}/product/${productId}/productDetail`)
    }

    getCategory(productId: number){
        return this.http.get<CategoryType>(`${this.productUrl}/product/${productId}/category`)
    }

}