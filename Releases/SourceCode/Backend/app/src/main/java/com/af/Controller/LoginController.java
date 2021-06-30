package com.af.Controller;

import com.af.Model.User;
import com.af.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/")
public class LoginController {

    private final UserRepository repository;

    public LoginController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping("login")
    public Object validate(@RequestBody User user) {

        String username = user.getEmail();
        String password = user.getPassword();

        Optional<User> valUser = repository.findById(user.getEmail());

        List userDetails = null;

        if ((valUser.get().getEmail().equals(username) && valUser.get().getPassword().equals(password))) {
            HashMap<String,String> hashMap = new HashMap<String, String>();

            hashMap.put("email", username);
            hashMap.put("role",valUser.get().getRole());
            hashMap.put("name",valUser.get().getName());
            return hashMap;
        }
        else return "Unauthorized";

    }
}
