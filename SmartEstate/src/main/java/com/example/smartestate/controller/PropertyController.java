package com.example.smartestate.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.smartestate.beans.Property;
import com.example.smartestate.service.PropertyService;

@RestController
@RequestMapping("/property")
@CrossOrigin(origins = "http://localhost:5173")
public class PropertyController {
	
	@Autowired
	PropertyService propertyService;
	
	@GetMapping(value="/getall")
	public List<Property> getAllProperties()
	{
		return propertyService.getAllProperties();
	}
	
	@PostMapping("/addproperty")
	public String saveProperty(@RequestParam ("image") MultipartFile image,
			@RequestParam("name") String name,
			@RequestParam("price") Integer price,
			@RequestParam("details") String details) throws IOException{
		return propertyService.saveProperty(image,name,price,details);
	}
	
	
    
}
