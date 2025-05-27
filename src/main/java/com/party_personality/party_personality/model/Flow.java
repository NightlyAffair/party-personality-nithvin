package com.party_personality.party_personality.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Entity
public class Flow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Setter
    @Getter
    @ManyToOne
    Quiz quiz;

    @Setter
    @Getter
    int key;

    @Setter
    @Getter
    int value;
}
