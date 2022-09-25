import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserType } from "../type/UserType";

@Injectable({providedIn: 'root'})
export class UserService{

    private usersUrl: string = "http://localhost:8080/user/getAll";

    constructor(private httpClient: HttpClient){}


    getAllUser(){
        return this.httpClient
            .get<UserType[]>(this.usersUrl);
         
    }


}