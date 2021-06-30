package com.af.Service.Impl;

import com.af.Model.Conference;
import com.af.Repositories.ConferenceRepository;
import com.af.Service.ConferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ConferenceServiceImpl implements ConferenceService {

    @Autowired
    private ConferenceRepository conferenceRepository;

    @Override
    public Conference addConference(Conference conference) {
        return conferenceRepository.save(conference);
    }

    @Override
    public List<Conference> getAllConf() {
        return conferenceRepository.findAll();
    }

    @Override
    public Optional<Conference> getConferenceById(String id) {
        return conferenceRepository.findById(id);
    }

    @Override
    public Conference updateConference(Conference conference) {
        return conferenceRepository.save(conference);
    }

    @Override
    public String deleteConference(String id) {

        conferenceRepository.deleteById(id);
        return "Deleted Successfully";
    }
}
