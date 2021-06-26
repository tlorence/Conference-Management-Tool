package com.af.Controller;

import com.af.Model.Conference;
import com.af.Service.ConferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/conferences")
public class ConferenceController {

    @Autowired
    ConferenceService conferenceService;

    @PostMapping("/add")
    public Conference addConference(@RequestBody Conference conference){
        return conferenceService.addConference(conference);
    }
}
