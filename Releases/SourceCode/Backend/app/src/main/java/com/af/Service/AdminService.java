package com.af.Service;

import org.springframework.stereotype.Service;

@Service
public interface AdminService {

    public String conferenceApproval(String conferenceId, String approval);
}
