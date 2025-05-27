package com.party_personality.party_personality.controller;


import com.party_personality.party_personality.exception.UserNotFoundException;
import com.party_personality.party_personality.model.Quiz;
import com.party_personality.party_personality.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    //Read all quizzes created by userid
    @GetMapping("/quiz/{userid}")
    public List<Quiz> getQuiz(@PathVariable Long userid) {
        return quizService.getQuiz(userid);
    }

    //Delete a quiz for a user
    @DeleteMapping("/quiz/{userid}/{quizid}")
    public void deleteQuiz(@PathVariable Long userid, @PathVariable Long quizid) {
        quizService.deleteQuiz(userid, quizid);
    }

    //Update a user's quiz
    @PutMapping("/quiz/{userid}")
    public void updateQuiz(@PathVariable Long userid, @RequestBody Quiz quiz) {
        try {
            quizService.updateQuiz(userid, quiz);
        } catch (UserNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }

}