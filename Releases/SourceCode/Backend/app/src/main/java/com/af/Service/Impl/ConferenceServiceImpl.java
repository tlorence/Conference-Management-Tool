package com.af.Service.Impl;

import com.af.Model.Conference;
import com.af.Repositories.ConferenceRepository;
import com.af.Service.ConferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ConferenceServiceImpl implements ConferenceService {

    @Autowired
    private ConferenceRepository conferenceRepository;

    @Override
    public Conference addConference(Conference conference) {
        return conferenceRepository.save(conference);
    }
}
