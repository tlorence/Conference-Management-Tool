package com.app.services.Model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;

@Document(collation = "Workshop")
public class Workshop {
    private String workshopName;
    private String date;
    private String time;
    private String stagingArea;
    private String[] presentations;

    public Workshop(String workshopName, String date, String time, String stagingArea, String[] presentations) {
        this.workshopName = workshopName;
        this.date = date;
        this.time = time;
        this.stagingArea = stagingArea;
        this.presentations = presentations;
    }
}
