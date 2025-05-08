package com.party_personality.party_personality.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.Map;

@Data
@Document(collection = "quizResults")
public class QuizResult {

    @Id
    private String id;
    private Map<String, String> answers;
    private String resultType;
    private LocalDateTime createdAt;

    public QuizResult() {
        this.createdAt = LocalDateTime.now();
    }

    public QuizResult(Map<String, String> answers, String resultType) {
        this.answers = answers;
        this.resultType = resultType;
        this.createdAt = LocalDateTime.now();
    }
}