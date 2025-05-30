package com.party_personality.party_personality.controller;

import com.party_personality.party_personality.exception.UserNotFoundException;
import com.party_personality.party_personality.model.User;
import com.party_personality.party_personality.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    //Read if a user is present in the db
    @GetMapping("/user/{user_id}")
    public ResponseEntity<User> getUser(@PathVariable("user_id") Long user_id) {
        try{
            return new ResponseEntity<>(userService.getUser(user_id), HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    //Create/Update a new user into the db
    @PostMapping("/user")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        return new ResponseEntity<>(userService.updateUser(user), HttpStatus.OK);
    }

}
