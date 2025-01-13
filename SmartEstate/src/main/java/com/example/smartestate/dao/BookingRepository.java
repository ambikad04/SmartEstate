package com.example.smartestate.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.smartestate.beans.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking,Integer> {

}
