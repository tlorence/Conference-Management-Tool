package com.app.services.Services;

import com.app.services.Model.User;
import com.app.services.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class UserServiceImpl implements IUserService{
    @Autowired
    private UserRepository userRepository;

    public Object loginUser(User user){
        String email =user.getEmail();
        String password=user.getPassword();

        Optional<User> validateUser=userRepository.findById(user.getEmail());

        if (validateUser.get().getEmail().equals(email) && validateUser.get().getPassword().equals(password)){
            return validateUser;
        }else return "Unauthorized";
    }


}
