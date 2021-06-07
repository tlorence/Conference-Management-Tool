package com.app.services.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "User")
public class User {
    @Id
    private String email;
    private String name;
    private String password;
    private String role;
    private String docPath;
    private String eduQualification;
    private String expertiseArea;
    private String paymentStatus;

    public User(String name, String password, String role, String email, String docPath, String eduQualification, String expertiseArea, String paymentStatus) {
        this.name = name;
        this.password = password;
        this.role = role;
        this.email = email;
        this.docPath = docPath;
        this.eduQualification = eduQualification;
        this.expertiseArea = expertiseArea;
        this.paymentStatus = paymentStatus;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setDocPath(String docPath) {
        this.docPath = docPath;
    }

    public void setEduQualification(String eduQualification) {
        this.eduQualification = eduQualification;
    }

    public void setExpertiseArea(String expertiseArea) {
        this.expertiseArea = expertiseArea;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }

    public String getEmail() {
        return email;
    }

    public String getDocPath() {
        return docPath;
    }

    public String getEduQualification() {
        return eduQualification;
    }

    public String getExpertiseArea() {
        return expertiseArea;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }
}
