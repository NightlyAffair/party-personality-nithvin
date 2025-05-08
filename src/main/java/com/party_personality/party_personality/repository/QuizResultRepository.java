package com.party_personality.party_personality.repository;

import com.party_personality.party_personality.model.QuizResult;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizResultRepository extends MongoRepository<QuizResult, String> {
}