import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable, Subscription } from 'rxjs';
import { PostType } from '../type/PostType';
import { UserType } from '../type/UserType';
import { User1Service } from './service/Post1Service';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit, OnDestroy {

  errorMessage: string = '';

  users: UserType[] = [];
  users1: UserType[] = [];
  posts: PostType[] = [];

  private userSub!: Subscription;
  private userSub1!: Subscription;

  postsForUser$: Observable<PostType[]> = this.user1Service.postsForUser$.pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  postsWithCategory4$: Observable<PostType[]> = this.user1Service.postsWithCategory4$.pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  )

  postsWithCategory$!: Observable<PostType[]>;

  userInput1: string = "";
  userInput2: string = "";
  userInput3: string = "";
  userInput4: string = "";

  constructor(private user1Service: User1Service) { }

  ngOnInit(): void {

  }

  findAllUser(){
    console.log("findUser called");
    this.userSub = this.user1Service.getAllUser().pipe().subscribe(data => {
      this.users = data;
    });
  }

  findlUsersByUserName(){
    this.userSub1 = this.user1Service.findlUsersByUserName(this.userInput1).pipe().subscribe(data => {
      this.users1 = data;
    });
  }

  findPostsByUserName(){
    console.log("findPostsByUserName called");
    this.user1Service.findPostsByUserName(this.userInput2);
  }

  findPostsWithCategoryName(){
    console.log("findPostsWithCategoryName called");
    this.postsWithCategory$ = this.user1Service.findPostsWithCategoryName();
  }

  findPostsByUserNameWithCategoryName(){
    console.log("findPostsByUserNameWithCategoryName called");
    this.user1Service.findPostsByUserNameWithCategoryName(this.userInput4);
  }

  ngOnDestroy(): void {
      this.userSub.unsubscribe();
      this.userSub1.unsubscribe();
  }

}
