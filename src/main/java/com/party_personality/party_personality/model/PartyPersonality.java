package com.party_personality.party_personality.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "partyPersonalities")
public class PartyPersonality {

    @Id
    private String id;
    private String type;
    private String description;
    private String characteristics;
    private String partyRecommendations;

    // Default constructor required by MongoDB
    public PartyPersonality() {
    }

    public PartyPersonality(String type, String description, String characteristics, String partyRecommendations) {
        this.type = type;
        this.description = description;
        this.characteristics = characteristics;
        this.partyRecommendations = partyRecommendations;
    }
}