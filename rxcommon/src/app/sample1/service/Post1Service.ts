import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, Subject, switchMap, map, tap, combineLatest, throwError, shareReplay } from "rxjs";
import { CategoryType } from "src/app/type/CategoryType";
import { PostType } from "src/app/type/PostType";
import { UserType } from "../../type/UserType";

@Injectable({providedIn: 'root'})
export class User1Service{

    private sample1Url: string = "http://localhost:8080/sample1";

    private userSubject = new Subject<string>();
    enterUser$ = this.userSubject.asObservable();
    
    postsForUser$ = this.enterUser$.pipe(
        switchMap(userName => this.getUserId(userName)),
        switchMap(userId => this.getPostsForUser(userId))
    );

    allPost$ = this.httpClient.get<PostType[]>(`${this.sample1Url}/post/getAll`)
        .pipe(catchError(this.handleError));

    allCategory$ = this.httpClient.get<CategoryType[]>(`${this.sample1Url}/category/getAll`)
        .pipe(
            catchError(this.handleError),
            shareReplay(1)// replay the data already recieve, do not need to call again
        );

    postsWithCategory$ = combineLatest([
        this.allPost$,
        this.allCategory$
    ]).pipe(
        map(([posts, categories]) => this.mapCategories(posts, categories))
    );

    mapCategories(posts: PostType[], categories: CategoryType[]): PostType[] {
        return posts.map(post => ({
          ...post,
          categoryName: categories.find(c => post.categoryId === c.id)?.name || 'No category'
        }) as PostType);
      }

    constructor(private httpClient: HttpClient){}

    // find all user way 1
    getAllUser(){
        return this.httpClient
            .get<UserType[]>(`${this.sample1Url}/user/getAll`);
    }

    // find all user way 2
    allUsers$ = this.httpClient.get<UserType[]>(`${this.sample1Url}/user/getAll`).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
    )

    findlUsersByUserName(userName: string): Observable<UserType[]>{
        return this.httpClient
            .get<UserType[]>(`${this.sample1Url}/user/${userName}`);
    }

    findPostsByUserName(userName: string){
        this.userSubject.next(userName);
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

    findPostsWithCategoryName(){
        return this.postsWithCategory$;
    }

    private user4Subject = new Subject<string>();
    enter4User$ = this.user4Subject.asObservable();

    postsForUser4$ = this.enter4User$.pipe(
        switchMap(userName => this.getUserId(userName)),
        switchMap(userId => this.getPostsForUser(userId))
    );

    postsWithCategory4$ = combineLatest([
        this.postsForUser4$,
        this.allCategory$
    ]).pipe(
        map(([posts, categories]) => this.mapCategories(posts, categories))
    );

    findPostsByUserNameWithCategoryName(userName: string){
        this.user4Subject.next(userName);
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
