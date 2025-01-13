package com.example.smartestate.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.smartestate.beans.User;
import com.example.smartestate.dao.UserRepository;

@Service
public class UserService 
{

    @Autowired
    private UserRepository userRepository;
    
    
    public List<User> getAllUsers()
	{
		return userRepository.findAll();
	}

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User save(User user) {
        return userRepository.save(user);
    }
    
    public User addUser (User user)
	{
		return userRepository.save(user);
	}
    
    public User getUser(Integer id) {
		User user = userRepository.findById(id).orElse(null);
		return user;
	}
    
    public User UpdateUser (User user) 
	{
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}
    
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}