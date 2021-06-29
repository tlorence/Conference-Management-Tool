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
    private byte[] file;
    private String eduQualification;
    private String expertiseArea;
    private String paymentStatus;
    private String approvalStatus;


    public User(String email, String name, String password, String role, String file, String eduQualification, String expertiseArea, String paymentStatus, String approvalStatus) {
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

    public void setFile(byte[] file) {
        this.file = file;
    }

    public void setEduQualification(String eduQualification) {
        this.eduQualification = eduQualification;
    }

    public void setExpertiseArea(String expertiseArea) {
        this.expertiseArea = expertiseArea;

        this.paymentStatus = "N/A";
        this.approvalStatus = "pending";
    }

    public String getApprovalStatus() {
        return approvalStatus;
    }

    public void setApprovalStatus(String approvalStatus) {
        this.approvalStatus = approvalStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;

    }

    public String getEmail() {
        return email;
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

    public byte[] getFile() {
        return file;
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

    public User(String email, String name, String password, String role, byte[] file, String eduQualification, String expertiseArea, String paymentStatus) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.role = role;
        this.file = file;
        this.eduQualification = eduQualification;
        this.expertiseArea = expertiseArea;
        this.paymentStatus = paymentStatus;
    }
}
