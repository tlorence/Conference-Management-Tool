package com.af.Service;

import com.af.Model.Conference;
import com.af.Model.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public interface ConferenceService {

    Conference addConference(Conference conference);
    List<Conference> getAllConf();
    Optional<Conference> getConferenceById(String id);
    String deleteConference(String id);
}
