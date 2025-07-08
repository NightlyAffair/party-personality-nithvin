package com.party_personality.party_personality.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "\"user\"")
public class User {

    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Setter
    @Getter
    @Column(unique = true, nullable = false)
    String username;

    @Setter
    @Getter
    String password;

    @Setter
    @Getter
    @Column(unique = true, nullable = false)
    String email;

    @Setter
    @Getter
    @Nullable
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Quiz> quizzes;
}
