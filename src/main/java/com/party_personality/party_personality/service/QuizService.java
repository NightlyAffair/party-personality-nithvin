package com.party_personality.party_personality.service;

import com.party_personality.party_personality.model.PartyPersonality;
import com.party_personality.party_personality.model.QuizResult;
import com.party_personality.party_personality.repository.PartyPersonalityRepository;
import com.party_personality.party_personality.repository.QuizResultRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final PartyPersonalityRepository personalityRepository;
    private final QuizResultRepository resultRepository;

    public QuizResult processQuizAnswers(Map<String, String> answers) {
        // Simple algorithm to determine personality type based on most common answer
        Map<String, Integer> counts = new HashMap<>();

        // Count the frequency of each answer
        for (String answer : answers.values()) {
            counts.put(answer, counts.getOrDefault(answer, 0) + 1);
        }

        // Find the most frequent answer
        String mostFrequentAnswer = "";
        int maxCount = 0;

        for (Map.Entry<String, Integer> entry : counts.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                mostFrequentAnswer = entry.getKey();
            }
        }

        // Map the most frequent answer to a personality type
        String personalityType;
        switch (mostFrequentAnswer) {
            case "A":
                personalityType = "Life of the Party";
                break;
            case "B":
                personalityType = "Chill Observer";
                break;
            case "C":
                personalityType = "Social Butterfly";
                break;
            case "D":
                personalityType = "Party Planner";
                break;
            default:
                personalityType = "Balanced Party Personality";
                break;
        }

        // Save and return the result
        QuizResult result = new QuizResult(answers, personalityType);
        return resultRepository.save(result);
    }

    public PartyPersonality getPersonalityDetails(String type) {
        return personalityRepository.findByType(type)
                .orElse(new PartyPersonality(type, "Description not available",
                        "Characteristics not available", "Recommendations not available"));
    }
}