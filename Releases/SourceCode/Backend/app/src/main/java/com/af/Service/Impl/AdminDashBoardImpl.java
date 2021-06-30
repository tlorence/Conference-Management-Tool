package com.af.Service.Impl;

import com.af.Dao.ResearchPapersDao;
import com.af.Model.Conference;
import com.af.Model.User;
import com.af.Repositories.ConferenceRepository;
import com.af.Repositories.UserRepository;
import com.af.Service.AdminDashBoard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminDashBoardImpl implements AdminDashBoard {
    @Autowired
    UserRepository userRepository;

    @Autowired
    ConferenceRepository conferenceRepository;

    @Override
    public List<User> getApprovedResearchers() {
        List<User> allUsers = userRepository.findAll();
        List<User> approvedUsers = new ArrayList<>();

        for (User allUser : allUsers) {
            if (allUser.getApproval().equalsIgnoreCase("Approved") && (allUser.getRole().equalsIgnoreCase("researcher"))) {
                approvedUsers.add(allUser);
            }
        }
        return approvedUsers;
    }

    @Override
    public List<User> getPendingResearchers() {
        List<User> allUsers = userRepository.findAll();
        List<User> pendingUsers = new ArrayList<>();

        for (User allUser : allUsers) {
            if (allUser.getApproval().equalsIgnoreCase("Pending") && (allUser.getRole().equalsIgnoreCase("researcher"))) {
                pendingUsers.add(allUser);
            }
        }
        return pendingUsers;
    }

    @Override
    public List<User> getRejectedResearchers() {
        List<User> allUsers = userRepository.findAll();
        List<User> rejectedUsers = new ArrayList<>();

        for (User allUser : allUsers) {
            if (allUser.getApproval().equalsIgnoreCase("Rejected") && (allUser.getRole().equalsIgnoreCase("researcher"))) {
                rejectedUsers.add(allUser);
            }
        }
        return rejectedUsers;
    }

    @Override
    public List<User> getApprovedWorkshopConductors() {
        List<User> allUsers = userRepository.findAll();
        List<User> approvedUsers = new ArrayList<>();

        for (User allUser : allUsers) {
            if (allUser.getApproval().equalsIgnoreCase("Approved") && (allUser.getRole().equalsIgnoreCase("workshopConductor"))) {
                approvedUsers.add(allUser);
            }
        }
        return approvedUsers;
    }

    @Override
    public List<User> getPendingWorkshopConductors() {
        List<User> allUsers = userRepository.findAll();
        List<User> pendingUsers = new ArrayList<>();

        for (User allUser : allUsers) {
            if (allUser.getApproval().equalsIgnoreCase("Pending") && (allUser.getRole().equalsIgnoreCase("workshopConductor"))) {
                pendingUsers.add(allUser);
            }
        }
        return pendingUsers;
    }

    @Override
    public List<User> getRejectedWorkshopConductors() {
        List<User> allUsers = userRepository.findAll();
        List<User> rejectedUsers = new ArrayList<>();

        for (User allUser : allUsers) {
            if (allUser.getApproval().equalsIgnoreCase("Rejected") && (allUser.getRole().equalsIgnoreCase("workshopConductor"))) {
                rejectedUsers.add(allUser);
            }
        }
        return rejectedUsers;
    }

    @Override
    public List<Conference> getConferences() {

        return conferenceRepository.findAll();
    }

}
