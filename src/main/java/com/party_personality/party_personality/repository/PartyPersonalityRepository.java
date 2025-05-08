package com.party_personality.party_personality.repository;

import com.party_personality.party_personality.model.PartyPersonality;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PartyPersonalityRepository extends MongoRepository<PartyPersonality, String> {
    Optional<PartyPersonality> findByType(String type);
}