package com.party_personality.party_personality.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException() {super("No such user found");}

    public UserNotFoundException(String message) {
        super(message);
    }
}
