package com.af.Service;

import com.af.Model.Conference;
import com.af.Model.User;

import java.util.List;

public interface AdminDashBoard {

    List<User> getApprovedResearchers();
    List<User> getPendingResearchers();
    List<User> getRejectedResearchers();
    List<User> getApprovedWorkshopConductors();
    List<User> getPendingWorkshopConductors();
    List<User> getRejectedWorkshopConductors();
    List<Conference> getConferences();

}
