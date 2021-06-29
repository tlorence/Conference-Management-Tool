package com.af.Service.Impl;

import com.af.Model.Conference;
import com.af.Repositories.ConferenceRepository;
import com.af.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    ConferenceRepository conferenceRepository;

    Conference conferenceObj;

    @Override
    public String conferenceApproval(String conferenceId, String approval) {

        Conference conference = conferenceRepository.findById(conferenceId).orElse(null);
        conference.setApprovalStatus(approval);
        conferenceRepository.save(conference);

        return "Success";
    }
}
