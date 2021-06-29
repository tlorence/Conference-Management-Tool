package com.af.Controller;

import com.af.Dto.ConferenceApprovalDto;
import com.af.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @PutMapping("/approve")
    public String approvalGrant(@RequestBody ConferenceApprovalDto conferenceApprovalDto){
        String conferenceId = conferenceApprovalDto.getId();
        String approval = conferenceApprovalDto.getApproval();

        return adminService.conferenceApproval(conferenceId,approval);


    }
}
