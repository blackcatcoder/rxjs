import { HttpClient } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { catchError, combineLatest, map, Observable, shareReplay, Subject, switchMap, tap, throwError } from "rxjs";
import { ProductCategoryType } from "src/app/type/ProductCategoryType";
import { ProductType } from "src/app/type/ProductType";
import { UserType } from "src/app/type/UserType";

@Injectable({providedIn: 'root'})
export class Product2Service implements ErrorHandler{

    private productUrl = "http://localhost:8080";

    private userSubject = new Subject<string>();
    enteredUser$ = this.userSubject.asObservable();

    productWithCategory$ = combineLatest([
        //this.http.get<ProductType[]>(this.productUrl),
        //this.http.get<ProductCategoryType[]>(this.productUrl)
        this.allProducts$,
        this.allCategories$

    ]);

    allProducts$ = this.http.get<ProductType[]>(this.productUrl).pipe(catchError(this.handleError));
    allCategories$ = this.http.get<ProductCategoryType[]>(this.productUrl).pipe(
        catchError(this.handleError),
        shareReplay(1)
    );


    products$ = this.enteredUser$.pipe(
        switchMap(userName => this.getUserIdByUserName(userName)),
        switchMap(userId => this.getProductByUserId(userId))
    );
    constructor(private http: HttpClient){}

    getProductByUserName(userName: string){
        this.userSubject.next(userName);
    }

    private getUserIdByUserName(userName: string): Observable<number>{
        return this.http.get<UserType>(`${this.productUrl}/user/${userName}`).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError),
            map(user => user.id)
        );
    }

    private getProductByUserId(userId: number): Observable<ProductType[]>{
        return this.http.get<ProductType[]>(`${this.productUrl}/user/${userId}/products`).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError),
        )
    }

    handleError(error: any){
        return throwError(() => "demo errorMessage");
    }

}