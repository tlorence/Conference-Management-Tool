package com.af.Service;

import com.af.Model.Conference;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public interface ConferenceService {

    Conference addConference(Conference conference);
}
