package com.earth.service;

import com.earth.entity.User;
import com.earth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    public UserRepository userRepository;


    public List<User> listallUsers() {
        return userRepository.findAll();
    }

    public User loginUser(User user) {
        return userRepository.findUserByEmailAndPassword(user.getEmail(), user.getPassword());
    }
}
