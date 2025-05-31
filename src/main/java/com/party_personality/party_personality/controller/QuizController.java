package com.party_personality.party_personality.controller;


import com.party_personality.party_personality.dto.QuizDTO;
import com.party_personality.party_personality.dto.QuizMapper;
import com.party_personality.party_personality.exception.UserNotFoundException;
import com.party_personality.party_personality.model.Quiz;
import com.party_personality.party_personality.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;
    private final QuizMapper quizMapper;

    //Read all quizzes created by userid
    @GetMapping("/quiz/{userid}")
    public ResponseEntity<List<QuizDTO>> getQuiz(@PathVariable Long userid) {
        List<Quiz> quizzes = quizService.getQuiz(userid);
        List<QuizDTO> quizDTOs = quizMapper.toDTO(quizzes);
        return new ResponseEntity<>(quizDTOs, HttpStatus.OK);
    }

    //Delete a quiz for a user
    @DeleteMapping("/quiz/{userid}/{quizid}")
    public ResponseEntity<?> deleteQuiz(@PathVariable Long userid, @PathVariable Long quizid) {
       try {
           quizService.deleteQuiz(userid, quizid);
           return new ResponseEntity<>(HttpStatus.OK);
       } catch (UserNotFoundException e) {
           return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
       }
    }

    //Update a user's quiz
    @PutMapping("/quiz/{userid}")
    public ResponseEntity<?> updateQuiz(@PathVariable Long userid, @RequestBody Quiz quiz) {
        try {
            quizService.updateQuiz(userid, quiz);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

}