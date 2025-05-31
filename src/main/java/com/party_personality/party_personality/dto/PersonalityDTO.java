package com.party_personality.party_personality.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonalityDTO {
    private Long id;
    private int personalityId;
    private String name;
    private String title;
    private String description;
}
