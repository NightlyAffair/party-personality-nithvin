package com.party_personality.party_personality.dto;

import com.party_personality.party_personality.model.*;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class QuizMapper {

    public QuizDTO toDTO(Quiz quiz) {
        QuizDTO dto = new QuizDTO();
        dto.setId(quiz.getId());

        if (quiz.getQuestions() != null) {
            dto.setQuestions(quiz.getQuestions().stream()
                    .map(this::toDTO)
                    .collect(Collectors.toList()));
        }

        if (quiz.getControlFlow() != null) {
            dto.setControlFlow(quiz.getControlFlow().stream()
                    .map(this::toDTO)
                    .collect(Collectors.toList()));
        }

        if (quiz.getPersonalities() != null) {
            dto.setPersonalities(quiz.getPersonalities().stream()
                    .map(this::toDTO)
                    .collect(Collectors.toList()));
        }

        return dto;
    }

    public QuestionDTO toDTO(Question question) {
        QuestionDTO dto = new QuestionDTO();
        dto.setId(question.getId());
        dto.setQuestionId(question.getQuestionId());
        dto.setQuestion(question.getQuestion());

        if (question.getAnswers() != null) {
            dto.setAnswers(question.getAnswers().stream()
                    .map(this::toDTO)
                    .collect(Collectors.toList()));
        }

        return dto;
    }

    public AnswerDTO toDTO(Answer answer) {
        AnswerDTO dto = new AnswerDTO();
        dto.setId(answer.getId());
        dto.setAnswerId(answer.getAnswerId());
        dto.setAnswer(answer.getAnswer());
        dto.setWeight(answer.getWeight());
        dto.setAssociation(answer.getAssociation());
        return dto;
    }

    public FlowDTO toDTO(Flow flow) {
        FlowDTO dto = new FlowDTO();
        dto.setId(flow.getId());
        dto.setKey(flow.getKey());
        dto.setValue(flow.getValue());
        return dto;
    }

    public PersonalityDTO toDTO(Personality personality) {
        PersonalityDTO dto = new PersonalityDTO();
        dto.setId(personality.getId());
        dto.setPersonalityId(personality.getPersonality_id());
        dto.setName(personality.getName());
        dto.setTitle(personality.getTitle());
        dto.setDescription(personality.getDescription());
        return dto;
    }

    public List<QuizDTO> toDTO(List<Quiz> quizzes) {
        return quizzes.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
