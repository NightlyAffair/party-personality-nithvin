package com.party_personality.party_personality.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerDTO {
    private Long id;
    private String answerId;
    private String answer;
    private int weight;
    private int association;
}