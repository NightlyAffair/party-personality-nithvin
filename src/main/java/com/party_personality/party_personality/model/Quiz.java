package com.party_personality.party_personality.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<Question> questions;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<Flow> controlFlow;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<Personality> personalities;

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
        questions.forEach(question -> question.setQuiz(this));
    }

    public void setControlFlow(List<Flow> controlFlow) {
        this.controlFlow = controlFlow;
        controlFlow.forEach(flow -> flow.setQuiz(this));
    }

    public void setPersonalities(List<Personality> personalities) {
        this.personalities = personalities;
        personalities.forEach(personal -> personal.setQuiz(this));
    }

}
