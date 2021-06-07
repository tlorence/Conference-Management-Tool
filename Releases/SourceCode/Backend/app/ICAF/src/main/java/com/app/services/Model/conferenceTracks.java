package com.app.services.Model;

public class conferenceTracks {
    private String topic;
    private String presenterName;
    private String[] discussionAreas ;

    public conferenceTracks(String topic, String presenterName, String[] discussionAreas) {
        this.topic = topic;
        this.presenterName = presenterName;
        this.discussionAreas = discussionAreas;
    }
}
