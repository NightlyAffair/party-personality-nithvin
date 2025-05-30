package com.party_personality.party_personality.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Personality {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int personality_id;

    private String name;

    private String title;

    private String description;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;


}
