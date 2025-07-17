package com.party_personality.party_personality.controller;


import com.party_personality.party_personality.dto.QuizDTO;
import com.party_personality.party_personality.dto.QuizMapper;
import com.party_personality.party_personality.model.Quiz;
import com.party_personality.party_personality.model.User;
import com.party_personality.party_personality.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final QuizMapper quizMapper;

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
        HashMap<String, String> map = userService.verifyUser(user);

        if (map.get("response") != null) {
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/user/{userid}")
    public ResponseEntity<?> getUser(@PathVariable("userid") String userid) {
        List<Quiz> quizzes = userService.getQuizzes(userid);
        List<QuizDTO> DTOquizzes = quizMapper.toDTO(quizzes);

        if(!quizzes.isEmpty()) {
            return new ResponseEntity<>(DTOquizzes, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
