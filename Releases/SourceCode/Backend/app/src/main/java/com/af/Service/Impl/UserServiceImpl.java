package com.af.Service.Impl;

import com.af.Dao.ResearchPapersDao;
import com.af.Dao.WorkShopProposalDao;
import com.af.Model.User;
import com.af.Repositories.UserRepository;
import com.af.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public List researchPapers() {
        List<User> allUsers = userRepository.findAll();
        List<ResearchPapersDao> papers = new ArrayList<>();

        for (User allUser : allUsers) {
            if (allUser.getRole().equals("researcher") && allUser.getApproval().equals("Pending")) {
                ResearchPapersDao researchPapersDao = new ResearchPapersDao(allUser.getEmail(), allUser.getName(), allUser.getFile());
                papers.add(researchPapersDao);
            }
        }
        return papers;
    }

    @Override
    public List workshopProposals() {
        List<User> allUsers = userRepository.findAll();
        List<WorkShopProposalDao> proposals = new ArrayList<>();

        for (User allUser : allUsers) {
            if (allUser.getRole().equals("workshopConductor") && allUser.getApproval().equals("Pending")) {
                WorkShopProposalDao workShopProposalDao = new WorkShopProposalDao(allUser.getEmail(), allUser.getName(), allUser.getFile());
                proposals.add(workShopProposalDao);
            }
        }
        return proposals;
    }
}
