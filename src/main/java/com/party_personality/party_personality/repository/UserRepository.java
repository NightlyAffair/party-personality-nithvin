package com.party_personality.party_personality.repository;

import com.party_personality.party_personality.model.Quiz;
import com.party_personality.party_personality.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
