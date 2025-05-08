package com.party_personality.party_personality.controller;

import com.party_personality.party_personality.model.PartyPersonality;
import com.party_personality.party_personality.model.QuizResult;
import com.party_personality.party_personality.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    @PostMapping("/submit")
    public ResponseEntity<QuizResult> submitQuiz(@RequestBody Map<String, String> answers) {
        QuizResult result = quizService.processQuizAnswers(answers);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/personality/{type}")
    public ResponseEntity<PartyPersonality> getPersonalityDetails(@PathVariable String type) {
        PartyPersonality personality = quizService.getPersonalityDetails(type);
        return ResponseEntity.ok(personality);
    }
}