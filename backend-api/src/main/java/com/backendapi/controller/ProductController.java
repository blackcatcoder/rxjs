package com.backendapi.controller;


import com.backendapi.entity.Category;
import com.backendapi.entity.Product;
import com.backendapi.entity.User;
import com.backendapi.model.CategoryModel;
import com.backendapi.model.ProductDetailModel;
import com.backendapi.model.ProductModel;
import com.backendapi.model.UserModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class ProductController {

    Logger logger = LoggerFactory.getLogger(ProductController.class);
    private Map<Long, Product> products;
    private List<Category> categories;
    private List<User> users;

    @PostConstruct
    private void init(){

        // userName
        User user1 = new User(20l, "vinv.2491@gmail.com", "user20");
        User user2 = new User(22l, "vanvi.dtld@gmail.com", "user21");
        users = new ArrayList<>();
        users.add(user1);
        users.add(user2);

        // category
        categories = new ArrayList<>();
        Category cat1 = new Category(10l, "category1");
        categories.add(cat1);
        Category cat2 = new Category(20l, "category2");
        categories.add(cat2);

        // product
        products = new HashMap<>();
        Product p1 = new Product(1l, "name1", "desc1");
        p1.setCategoryId(cat1.getId());
        p1.setUserId(user1.getId());

        Product p2 = new Product(2l, "name2", "desc2");
        p2.setCategoryId(cat1.getId());
        p2.setUserId(user1.getId());

        Product p3 = new Product(3l, "name3", "desc3");
        p3.setCategoryId(cat1.getId());
        p3.setUserId(user1.getId());

        Product p4 = new Product(4l, "name4", "desc4");
        p4.setCategoryId(cat2.getId());
        p4.setUserId(user2.getId());

        Product p5 = new Product(5l, "name5", "desc5");
        p5.setCategoryId(cat2.getId());
        p5.setUserId(user2.getId());

        products.put(p1.getId(), p1);
        products.put(p2.getId(), p2);
        products.put(p3.getId(), p3);
        products.put(p4.getId(), p4);
        products.put(p5.getId(), p5);

    }

    @GetMapping("user/getAll")
    public List<UserModel> getAllUser(){
        return this.users.stream().map(user -> new UserModel(user.getId(), user.getEmail(), user.getUserName())).collect(Collectors.toList());
    }

    @GetMapping("product/getAll")
    public List<ProductModel> getProduct(){
        return this.products.entrySet().stream().map(Map.Entry::getValue).map(product -> new ProductModel(product.getId(), product.getName())).collect(Collectors.toList());
    }

    @GetMapping("user/{userId}/products")
    public List<ProductModel> getProductsByUserId(@PathVariable Long userId){
        return this.products.entrySet().stream()
                .map(Map.Entry::getValue).filter(product -> product.getUserId().equals(userId))
                .map(product -> new ProductModel(product.getId(), product.getName()))
                .collect(Collectors.toList());
    }

    @GetMapping("product/{productId}/productDetail")
    public ProductDetailModel getProductDetailById(@PathVariable String productId){
        logger.info(productId);
        return this.products.entrySet().stream()
                .map(Map.Entry::getValue)
                .filter(product -> product.getId().equals(Long.parseLong(productId)))
                .findFirst()
                .map(product -> new ProductDetailModel(product.getId(), product.getName(), product.getDesc()))
                .orElse(null);
    }

    @GetMapping("product/{productId}/category")
    public CategoryModel getCategoryByProductId(@PathVariable String productId){

         Optional<Product> productOpt = this.products.entrySet().stream()
                .map(Map.Entry::getValue)
                .filter(product -> product.getId().equals(Long.parseLong(productId)))
                .findFirst();
         if(productOpt.isPresent()){
             return categories.stream().filter(category -> category.getId().equals(productOpt.get().getCategoryId())).findFirst().map(category -> new CategoryModel(category.getId(), category.getName())).orElse(null);
         }
         return null;
    }

}
