package com.af.Model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "workshops")
public class WorkShop {
    String id;
    String name;
    String date;
    String stagingArea;
    String presentations[];

    public WorkShop(String id, String name, String date, String stagingArea, String[] presentations) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.stagingArea = stagingArea;
        this.presentations = presentations;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStagingArea() {
        return stagingArea;
    }

    public void setStagingArea(String stagingArea) {
        this.stagingArea = stagingArea;
    }

    public String[] getPresentations() {
        return presentations;
    }

    public void setPresentations(String[] presentations) {
        this.presentations = presentations;
    }
}
