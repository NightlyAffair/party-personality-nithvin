package com.party_personality.party_personality.dto;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class QuizDTO {
    private Long id;
    private List<QuestionDTO> questions;
    private List<FlowDTO> controlFlow;
    private List<PersonalityDTO> personalities;
    private List<AnswerDTO> answers;
}
