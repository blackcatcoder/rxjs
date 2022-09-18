package com.backendapi.model;

public class UserModel {

    private Long id;
    private String email;
    private String userName;

    public UserModel(Long id, String email, String userName) {
        this.id = id;
        this.email = email;
        this.userName = userName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
