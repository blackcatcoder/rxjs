import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, Subject, switchMap, map, of, combineLatest, throwError } from "rxjs";
import { PostType } from "src/app/type/PostType";
import { UserType } from "../../type/UserType";

@Injectable({providedIn: 'root'})
export class User1Service{

    private sample1Url: string = "http://localhost:8080/sample1";

    //
    private userSubject = new Subject<string>();
    enterUser$ = this.userSubject.asObservable();
    
    //
    postForUser$ = this.enterUser$.pipe(
        switchMap(userName => this.getUserId(userName)),
        switchMap(userId => this.getPostsForUser(userId))
    );

    //
    postsWithCategory$ = combineLatest([
        this.httpClient.get<PostType[]>(this.sample1Url)
    ])


    constructor(private httpClient: HttpClient){}


    getAllUser(){
        return this.httpClient
            .get<UserType[]>(`${this.sample1Url}/user/getAll`);
    }

    findPostsByUserName(userName: string){
        this.userSubject.next(userName);
        // return this.httpClient
        //     .get<PostType[]>(`${this.sample1Url}/user/${userName}/getPosts`);
    }

    private getUserId(userName: string): Observable<number>{
        return this.httpClient.get<UserType[]>(`${this.sample1Url}/user/${userName}`).pipe(
            catchError(this.handleError),
            map(users => (users.length === 0) ? 0 : users[0].id)
        );
    }

    private getPostsForUser(userId: number): Observable<PostType[]>{
        return this.httpClient.get<PostType[]>(`${this.sample1Url}/user/${userId}/getPosts`).pipe(
            catchError(this.handleError)
        );
    }

    handleError(err: any): Observable<never>{
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }


}
