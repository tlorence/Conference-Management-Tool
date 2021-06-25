package com.af.Service;

import com.af.Model.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface UserService {
    User addUser(User user);

    List<User> getAll();
}
