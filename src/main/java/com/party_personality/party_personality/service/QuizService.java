package com.party_personality.party_personality.service;


import com.party_personality.party_personality.exception.UserNotFoundException;
import com.party_personality.party_personality.model.Quiz;
import com.party_personality.party_personality.model.User;
import com.party_personality.party_personality.repository.QuizRepository;
import com.party_personality.party_personality.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final UserRepository userRepository;
    private final QuizRepository quizRepository;

    public List<Quiz> getQuiz(Long userid) {
       return quizRepository.findByUserId(userid);
    }


    public void deleteQuiz(Long userid, Long quizid) {
        User user = userRepository.findById(userid).orElseThrow(() -> new UserNotFoundException());
        quizRepository.deleteById(quizid);
    }

    public void updateQuiz(Long userid, Quiz quiz) {
        User user = userRepository.findById(userid).orElseThrow(() -> new UserNotFoundException());

        quiz.setUser(user);

        quizRepository.save(quiz);


    }


}