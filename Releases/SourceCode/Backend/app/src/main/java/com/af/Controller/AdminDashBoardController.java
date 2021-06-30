package com.af.Controller;

import com.af.Model.Conference;
import com.af.Model.User;
import com.af.Service.AdminDashBoard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/dashboard")
public class AdminDashBoardController {
    @Autowired
    AdminDashBoard adminDashBoard;

    @GetMapping("/approvedResearchers")
    public List<User> getApprovedResearchers(){ return adminDashBoard.getApprovedResearchers();}

    @GetMapping("/pendingResearchers")
    public List<User> getPendingResearchers(){ return adminDashBoard.getPendingResearchers();}

    @GetMapping("/rejectedResearchers")
    public List<User> getRejectedResearchers(){ return adminDashBoard.getRejectedResearchers();}

    @GetMapping("/approvedWorkshopConductors")
    public List<User> getApprovedWorkshopConductors(){ return adminDashBoard.getApprovedWorkshopConductors();}

    @GetMapping("/pendingWorkshopConductors")
    public List<User> getPendingWorkshopConductors(){ return adminDashBoard.getPendingWorkshopConductors();}

    @GetMapping("/rejectedWorkshopConductors")
    public List<User> getRejectedWorkshopConductors(){ return adminDashBoard.getRejectedWorkshopConductors();}

    @GetMapping("/allConferences")
    public List<Conference> getAllConferences(){ return adminDashBoard.getConferences();}
}
