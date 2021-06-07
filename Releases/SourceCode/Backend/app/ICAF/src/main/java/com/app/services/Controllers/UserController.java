package com.app.services.Controllers;

import com.app.services.Model.User;
import com.app.services.Repository.UserRepository;
import com.app.services.Services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository1;
    IUserService iUserService;


    @PatchMapping("/login")
    public Object loginUser(@RequestBody User user){

        return iUserService.loginUser(user);
    }

    @GetMapping("/getUsers")
    public List<User> getUsers(){
        return this.userRepository1.findAll();
    }
}
