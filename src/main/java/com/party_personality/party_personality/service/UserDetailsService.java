package com.party_personality.party_personality.service;

import com.party_personality.party_personality.model.User;
import com.party_personality.party_personality.model.UserPrincipal;
import com.party_personality.party_personality.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            System.out.println("user not found");
            throw new UsernameNotFoundException(username);
        }
        System.out.println(user.getPassword());
        return new UserPrincipal(user);
    }

}
