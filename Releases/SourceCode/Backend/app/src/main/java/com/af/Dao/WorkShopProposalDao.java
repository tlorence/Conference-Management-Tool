package com.af.Dao;

public class WorkShopProposalDao {

    private String email;
    private String name;
    private String file;

    public WorkShopProposalDao(String email, String name, String file) {
        this.email = email;
        this.name = name;
        this.file = file;
    }

    public WorkShopProposalDao() {

    }

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

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }
}
