package com.party_personality.party_personality.service;

import com.party_personality.party_personality.model.Quiz;
import com.party_personality.party_personality.model.User;
import com.party_personality.party_personality.repository.QuizRepository;
import com.party_personality.party_personality.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    JWTService jwtService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

    public Boolean registerUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        try {
            userRepository.save(user);
        } catch (DataIntegrityViolationException e) {
            return false;
        };

        return true;
    }

    public HashMap<String, String> verifyUser(User user) {


        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        if(authentication.isAuthenticated()) {
            HashMap<String, String> map = new HashMap<>();
            map.put("response", "200");
            map.put("token", jwtService.generateToken(user.getUsername()));
            map.put("userid", String.valueOf(userRepository.findByUsername(user.getUsername()).getId()));

            return map;
        }
        return null;
    }

    public List<Quiz> getQuizzes(String userid) {
        return quizRepository.findByUserId(Long.valueOf(userid));
    }

}
