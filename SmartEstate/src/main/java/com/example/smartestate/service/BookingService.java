package com.example.smartestate.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.smartestate.beans.Booking;
import com.example.smartestate.dao.BookingRepository;

@Service
public class BookingService {

	@Autowired
	BookingRepository bookingRepository;
	
	public List<Booking> getAllBookings()
	{
		return bookingRepository.findAll();
	}
	public Booking addBooking (Booking booking)
	{
		return bookingRepository.save(booking);
	}
	public Booking getBooking(Integer uid) {
		Booking booking = bookingRepository.findById(uid).orElse(null);
		return booking;
	}
	
	public Booking UpdateBooking (Booking booking) 
	{
		// TODO Auto-generated method stub
		return bookingRepository.save(booking);
	}
	
	public void deleteBooking(Integer uid) {
        bookingRepository.deleteById(uid);
    }
}
