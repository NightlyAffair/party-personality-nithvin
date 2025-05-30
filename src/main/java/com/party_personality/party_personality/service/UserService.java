package com.party_personality.party_personality.service;

import com.party_personality.party_personality.exception.UserNotFoundException;
import com.party_personality.party_personality.model.User;
import com.party_personality.party_personality.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    public User getUser(long user_id) {
        return userRepository.findById(user_id).orElseThrow(() -> new UserNotFoundException());
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }
}
