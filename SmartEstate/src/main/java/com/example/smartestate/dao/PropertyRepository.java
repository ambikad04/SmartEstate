package com.example.smartestate.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.smartestate.beans.Property;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long>{

	
}
