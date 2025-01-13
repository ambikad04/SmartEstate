package com.example.smartestate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.smartestate.beans.User;
import com.example.smartestate.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;
    
    @GetMapping(value="/getall")
	public List<User> getAllUsers()
	{
		return userService.getAllUsers();
	}

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User existingUser = userService.findByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
    
    
    @PostMapping(value="/adduser")
	public User addUser(@RequestBody User user)
	{
		return userService.addUser(user);
	}
    
	@GetMapping(value="/getuserbyid{id}")
	public User getUser(@PathVariable("id") Integer id)
	{
		return userService.getUser(id);
	}
	
	@PutMapping(value = "/updateuser")
	public User updateUser(@RequestBody User user)
	{
		return userService.UpdateUser(user);		
	}
	
	@DeleteMapping("/deleteuser{id}")
    public void deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
    }
}
