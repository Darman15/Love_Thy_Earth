package com.earth.controller;

import com.earth.entity.User;
import com.earth.repository.UserRepository;
import com.earth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

//    Request mapping tells the program it is a servlet
//    --------------
// Post a new User logic
    @RequestMapping(value = "/saveUser",
            consumes= MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.POST)
    public void submitUserDetails(@RequestBody User user) {
        userRepository.save(user);
    }
//    ---------------
//    End of post a new user logic


//    Get all users logic
    @RequestMapping(value = "/getAllUsers",
    produces = MediaType.APPLICATION_JSON_VALUE,
    method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> allUsers = userService.listallUsers();
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }
//    ----------------
//    End of get all users Logic

//    Get user by id
    @RequestMapping(value = "/findUserById",
    produces = MediaType.APPLICATION_JSON_VALUE,
    method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity <Optional<User>> findUserById(int id) {
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }
//    ----------
//    End of get user by id logic


//    Delete user by ID
    @RequestMapping(value = "/deleteUser",
    consumes = MediaType.APPLICATION_JSON_VALUE,
    method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity<Optional<User>> deleteUserById(int id) {
        userRepository.deleteById(id);
        return new ResponseEntity<>( HttpStatus.OK);
    }
//    -----------------------
//    End of Delete user by ID


//    Update User or put
    @RequestMapping(value = "/updateUser",
    consumes = MediaType.APPLICATION_JSON_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE,
    method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<Optional<User>> updateUser(@RequestBody User user) {

       User updateUser = userRepository.findById(user.getId()).get();

        updateUser.setId(user.getId());
        updateUser.setAddress(user.getAddress());
       updateUser.setEmail(user.getEmail());
        updateUser.setFirstName(user.getFirstName());
        updateUser.setLastName(user.getLastName());
        updateUser.setPassword(user.getPassword());

        userRepository.save(updateUser);
        return new ResponseEntity<>(HttpStatus.OK);

    }
//    -------------
//    end of update user logic


//    start of user Login Logic
    @RequestMapping(value = "/loginUser",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE,
        method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<User> loginUser(@RequestBody User user) {
        User loginUser = userService.loginUser(user);

        if (loginUser != null ) {
            return new ResponseEntity<>(loginUser, HttpStatus.OK);

        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }




}










