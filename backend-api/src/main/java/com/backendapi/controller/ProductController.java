package com.backendapi.controller;

import com.backendapi.model.Product;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("product")
@CrossOrigin
public class ProductController {

    private Map<String, Product> products;

    @PostConstruct
    private void init(){
        products = new HashMap<>();
        Product p1 = new Product("id1", "name1");
        Product p2 = new Product("id2", "name2");

        products.put(p1.getId(), p1);
        products.put(p2.getId(), p2);
    }

    @GetMapping("getAll")
    public List<Product> getProduct(){
        return this.products.entrySet().stream().map(Map.Entry::getValue).collect(Collectors.toList());
    }

    @GetMapping("getAll/{catId}")
    public List<Product> getProductByCategory(@PathVariable String catId){
        System.out.println(catId);
        return this.products.entrySet().stream().map(Map.Entry::getValue).collect(Collectors.toList());
    }
}
