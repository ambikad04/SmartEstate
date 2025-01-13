package com.example.smartestate.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import com.example.smartestate.beans.Property;
import com.example.smartestate.dao.PropertyRepository;

@Service
public class PropertyService {

	@Autowired
     PropertyRepository propertyRepository;
	
	public List<Property> getAllProperties()
	{
		return propertyRepository.findAll();
	}
	
	public String saveProperty(MultipartFile image, String name, Integer price, String details) throws IOException{
		Property property = new Property();
		property.setName(name);
		property.setPrice(price);
		property.setDetails(details);
		property.setImage(image.getBytes());
		 propertyRepository.save(property);
		 return "Image saved in DB";
	}
	
	
}
