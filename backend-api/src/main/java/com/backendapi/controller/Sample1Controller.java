package com.backendapi.controller;


import com.backendapi.model.Post;
import com.backendapi.model.UserModel;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("sample1")
public class Sample1Controller {

    List<UserModel> users;
    List<Post> posts;

    public Sample1Controller(){

        users = new ArrayList<>();
        UserModel user1 = new UserModel(1l, "user1@gmail.com", "user1");
        UserModel user2 = new UserModel(2l, "user2@gmail.com", "user2");
        users.add(user1);
        users.add(user2);

        posts = new ArrayList<>();
        Post post1 = new Post(1l, "title1", "body1", 1l, 1l);
        Post post2 = new Post(2l, "title2", "body2", 1l, 2l);
        Post post3 = new Post(3l, "title3", "body3", 3l, 3l);
        posts = new ArrayList<>();
        posts.add(post1);
        posts.add(post2);
        posts.add(post3);
    }

    @GetMapping("user/getAll")
    public List<UserModel> getAllUser(){
        return this.users;
    }

    @GetMapping("user/{userName}")
    public List<UserModel> getAllUser(@PathVariable String userName){
        return this.users
                .stream()
                .filter(user -> user.getUserName().equals(userName))
                .collect(Collectors.toList());
    }

    @GetMapping("user/{userId}/getPosts")
    public List<Post> getPostsByUser(@PathVariable long userId){
        return posts
                .stream()
                .filter(post -> post.getUserId() == userId)
                .collect(Collectors.toList());
    }


}
