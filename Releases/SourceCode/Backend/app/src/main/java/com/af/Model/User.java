package com.af.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    private String email;
    private String name;
    private String password;
    private String role;
    private String file;
    private String eduQualification;
    private String expertiseArea;
    private String paymentStatus;
    private String approval;

    public User(String email, String name, String password, String role, String file, String eduQualification, String expertiseArea, String paymentStatus, String approval) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.role = role;
        this.file = file;
        this.eduQualification = eduQualification;
        this.expertiseArea = expertiseArea;
        this.paymentStatus = "Pending";
        this.approval = approval;
    }

    public String getApproval() { return approval; }

    public void setApproval(String approval) { this.approval = approval; }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String docPath) {
        this.file = docPath;
    }

    public String getEduQualification() {
        return eduQualification;
    }

    public void setEduQualification(String eduQualification) {
        this.eduQualification = eduQualification;
    }

    public String getExpertiseArea() {
        return expertiseArea;
    }

    public void setExpertiseArea(String expertiseArea) {
        this.expertiseArea = expertiseArea;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
}