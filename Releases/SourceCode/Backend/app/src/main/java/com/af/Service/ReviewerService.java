package com.af.Service;

import org.springframework.stereotype.Service;

@Service
public interface ReviewerService {

    String approval(String email, String approvalStatus);
}
