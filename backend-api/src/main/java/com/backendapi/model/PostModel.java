package com.backendapi.model;

public class PostModel {
    private long id;
    private String title;
    private String body;
    private long userId;
    private long categoryId;

    public PostModel(long id, String title, String body, long userId, long categoryId) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.userId = userId;
        this.categoryId = categoryId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}
