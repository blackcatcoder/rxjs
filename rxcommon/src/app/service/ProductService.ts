import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, Subject, switchMap, tap } from "rxjs";
import { Product } from "../type/Product";


@Injectable({providedIn: 'root'})
export class ProductService{

    private productUrl = "http://localhost:8080/product/getAll";

    categorySubject = new Subject<number>();
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
    products$ = this.categorySelectedAction$.pipe(
        switchMap(catId => this.http.get<Product[]>(`${this.productUrl}/${catId}`)
        .pipe(
            tap(data => console.log(data))
        )));

    handleError(){
        console.log("something went wrong");
    }

}