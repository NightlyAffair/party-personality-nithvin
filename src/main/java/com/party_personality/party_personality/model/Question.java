package com.party_personality.party_personality.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor

public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Changed to Long for auto-increment

    @Column(name = "question_id")
    private String questionId;  // Business identifier (can be duplicate)

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    @Column(name = "question")
    private String question;

    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Answer> answers;

    // Custom setter for bidirectional relationship
    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
        if (answers != null) {
            answers.forEach(answer -> answer.setQuestion(this));
        }
    }
}