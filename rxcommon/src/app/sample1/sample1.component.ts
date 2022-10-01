import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PostType } from '../type/PostType';
import { UserType } from '../type/UserType';
import { User1Service } from './service/User1Service';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit, OnDestroy {

  // title = 'rxcommon';

  users: UserType[] = [];
  posts: PostType[] = [];
  // productDetail: ProductDetailType | null = null;

  private userSub!: Subscription;
  private postSub!: Subscription;
  // private productDetailSub!: Subscription;

  postForUser$!: Observable<PostType[]>;


  //   // case 1
  //   allProduct: ProductType[] = [];

  //   // case 2
  //   products$!: Observable<ProductType[]>;

  userInput: string = "";

  constructor(private user1Service: User1Service) { }

  ngOnInit(): void {
  }

  findAllUser(){
    console.log("findUser called");
    this.userSub = this.user1Service.getAllUser().pipe().subscribe(data => {
      this.users = data;
    });
  }

  findPostsByUserName(){
    this.user1Service.findPostsByUserName(this.userInput);
    // this.postSub = this.user1Service.findPostsByUserName(this.userInput).pipe().subscribe(data => {
    //   this.posts = data;
    // });
  }

  ngOnDestroy(): void {
      this.userSub.unsubscribe();
  }

  // getProductByUser(userId: ElementRef){

  //   this.productDetail = null;

  //   console.log("userId: ");
  //   console.log(userId);

  //   this.productSub = this.productService.getProductByUserId(+userId).subscribe(response => {
  //     this.products = response;
  //   });
  // }

  // getProductDetail(productId: number){
  //   this.productDetailSub = this.productService.getProductDetail(productId).subscribe(response => {
  //     this.productDetail = response;
  //   })
  // }

  // sendCategory(){
  //   console.log("category click");
  //   const catId = 1;
  //   //this.productService.getProductByCategory(catId);
  // }

}
