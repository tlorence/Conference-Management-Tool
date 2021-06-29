package com.af.Service.Impl;

import com.af.Model.Conference;
import com.af.Model.User;
import com.af.Repositories.UserRepository;
import com.af.Service.ReviewerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewerServiceImpl implements ReviewerService {

    @Autowired
    UserRepository userRepository;

    @Override
    public String approval(String email, String approvalStatus) {

        User user = userRepository.findById(email).orElse(null);
        user.setApproval(approvalStatus);
        userRepository.save(user);

        return "Success";
    }
}
