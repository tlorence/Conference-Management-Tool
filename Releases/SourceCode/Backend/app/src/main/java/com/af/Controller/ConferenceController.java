package com.af.Controller;

import com.af.Model.Conference;
import com.af.Service.ConferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/getAllConferences")
    public List<Conference> getAllconf(){
        return conferenceService.getAllConf();
    }

    @GetMapping("/findConferenceById/{id}")
    public Optional<Conference> getConferenceById(@PathVariable String id){
        return conferenceService.getConferenceById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteConference(@PathVariable String id){
        return conferenceService.deleteConference(id);
    }

}
