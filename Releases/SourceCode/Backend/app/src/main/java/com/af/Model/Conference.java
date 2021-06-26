package com.af.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "conferences")
public class Conference {

    @Id
    private String conferenceId;
    private String conferenceName;
    private String date;
    private String venue;
    private String aboutConference;
    private String[] keynote_speakers;
    private String guestSpeaker;
    private String[] conferenceTracks;

    public Conference(String conferenceId, String conferenceName, String date, String venue, String aboutConference, String[] keynote_speakers, String guestSpeaker, String[] conferenceTracks) {
        this.conferenceId = conferenceId;
        this.conferenceName = conferenceName;
        this.date = date;
        this.venue = venue;
        this.aboutConference = aboutConference;
        this.keynote_speakers = keynote_speakers;
        this.guestSpeaker = guestSpeaker;
        this.conferenceTracks = conferenceTracks;
    }

    public String getConferenceId() {
        return conferenceId;
    }

    public void setConferenceId(String conferenceId) {
        this.conferenceId = conferenceId;
    }

    public String getConferenceName() {
        return conferenceName;
    }

    public void setConferenceName(String conferenceName) {
        this.conferenceName = conferenceName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getAboutConference() {
        return aboutConference;
    }

    public void setAboutConference(String aboutConference) {
        this.aboutConference = aboutConference;
    }

    public String[] getKeynote_speakers() {
        return keynote_speakers;
    }

    public void setKeynote_speakers(String[] keynote_speakers) {
        this.keynote_speakers = keynote_speakers;
    }

    public String getGuestSpeaker() {
        return guestSpeaker;
    }

    public void setGuestSpeaker(String guestSpeaker) {
        this.guestSpeaker = guestSpeaker;
    }

    public String[] getConferenceTracks() {
        return conferenceTracks;
    }

    public void setConferenceTracks(String[] conferenceTracks) {
        this.conferenceTracks = conferenceTracks;
    }
}
