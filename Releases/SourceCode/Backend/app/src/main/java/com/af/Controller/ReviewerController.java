package com.af.Controller;

import com.af.Dto.ReviewerApprovalDto;
import com.af.Service.ReviewerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/reviewer")
public class ReviewerController {

    @Autowired
    ReviewerService reviewerService;

    @PutMapping("/approve")
    public String approveUserSubmission(@RequestBody ReviewerApprovalDto reviewerApprovalDto){
        String id = reviewerApprovalDto.getId();
        String approval = reviewerApprovalDto.getApproval();

        return reviewerService.approval(id,approval);
    }
}
