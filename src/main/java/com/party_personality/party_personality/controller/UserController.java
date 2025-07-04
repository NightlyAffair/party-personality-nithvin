package com.party_personality.party_personality.controller;


import com.party_personality.party_personality.model.User;
import com.party_personality.party_personality.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PutMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        Boolean response = userService.registerUser(user);
        if(response) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        String response = userService.verifyUser(user);
        Map<String, String> map = new HashMap<>();
        map.put("response", "200");
        map.put("token", response);
        if (response != null) {
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
