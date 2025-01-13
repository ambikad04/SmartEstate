package com.example.smartestate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.smartestate.beans.Booking;
import com.example.smartestate.service.BookingService;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

	@Autowired
	BookingService bookingService;
	
	@GetMapping(value="/getall")
	public List<Booking> getAllBookings()
	{
		return bookingService.getAllBookings();
	}
	
	@GetMapping(value="/getbookingbyuid{uid}")
	public Booking getBooking(@PathVariable("uid") Integer uid)
	{
		return bookingService.getBooking(uid);
	}
	
	@PostMapping(value="/addbooking")
	public Booking addBooking(@RequestBody Booking booking)
	{
		return bookingService.addBooking(booking);
	}
	
	@PutMapping(value = "/updatebooking")
	public Booking updateBooking(@RequestBody Booking booking)
	{
		return bookingService.UpdateBooking(booking);		
	}
	
	@DeleteMapping("/deletebooking{uid}")
    public void deleteBooking(@PathVariable Integer uid) {
        bookingService.deleteBooking(uid);
    }
}
