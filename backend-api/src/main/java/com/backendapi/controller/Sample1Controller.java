package com.backendapi.controller;


import com.backendapi.entity.Category;
import com.backendapi.model.CategoryModel;
import com.backendapi.model.PostModel;
import com.backendapi.model.UserModel;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("sample1")
public class Sample1Controller {

    List<UserModel> users = new ArrayList<>();
    List<PostModel> posts = new ArrayList<>();
    List<CategoryModel> categories = new ArrayList<>();

    public Sample1Controller(){

        UserModel user1 = new UserModel(1l, "user1@gmail.com", "user1");
        UserModel user2 = new UserModel(2l, "user2@gmail.com", "user2");
        users.add(user1);
        users.add(user2);

        PostModel post1 = new PostModel(1l, "title1", "body1", 1l, 1l);
        PostModel post2 = new PostModel(2l, "title2", "body2", 1l, 2l);
        PostModel post3 = new PostModel(3l, "title3", "body3", 3l, 3l);
        posts.add(post1);
        posts.add(post2);
        posts.add(post3);

        CategoryModel cat1 = new CategoryModel(1l, "category 1");
        CategoryModel cat2 = new CategoryModel(2l, "category 2");
        categories.add(cat1);
        categories.add(cat2);
    }

    @GetMapping("user/getAll")
    public List<UserModel> getAllUser(){
        return this.users;
    }

    @GetMapping("user/{userName}")
    public List<UserModel> getAllUser(@PathVariable String userName){
        return this.users
                .stream()
                .filter(user -> user.getUserName().startsWith(userName))
                .collect(Collectors.toList());
    }

    @GetMapping("user/{userId}/getPosts")
    public List<PostModel> getPostsByUser(@PathVariable long userId){
        return posts
                .stream()
                .filter(post -> post.getUserId() == userId)
                .collect(Collectors.toList());
    }

    @GetMapping("post/getAll")
    public List<PostModel> getAllPost(){
        return posts;
    }

    @GetMapping("category/getAll")
    public List<CategoryModel> getAllCategory(){
        return categories;
    }

}
