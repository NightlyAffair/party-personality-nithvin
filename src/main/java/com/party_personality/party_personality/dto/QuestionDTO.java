package com.party_personality.party_personality.dto;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class QuestionDTO {
    private Long id;
    private String questionId;
    private String question;
    private List<AnswerDTO> answers;
}
