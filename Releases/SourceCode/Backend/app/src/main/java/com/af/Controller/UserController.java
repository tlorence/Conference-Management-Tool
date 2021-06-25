package com.af.Controller;

import com.af.Model.User;
import com.af.Repositories.UserRepository;
import com.af.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @GetMapping("/getAllUsers")
    public List<User> getAll(){
        return userService.getAll();
    }
}
