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

import com.example.smartestate.beans.Payment;
import com.example.smartestate.service.PaymentService;


@RestController
@RequestMapping("/payment")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentController {

	@Autowired
	PaymentService paymentService;
	
	@GetMapping(value="/getall")
	public List<Payment> getAllPayments()
	{
		return paymentService.getAllPayments();
	}
	
	@PostMapping(value="/addpayment")
	public Payment addPayment(@RequestBody Payment payment)
	{
		return paymentService.addPayment(payment);
	}
	
	@GetMapping(value="/getpaymentbyid{id}")
	public Payment getPayment(@PathVariable("id") Long id)
	{
		return paymentService.getPayment(id);
	}
	
	@PutMapping(value = "/updatepayment")
	public Payment updatePayment(@RequestBody Payment payment)
	{
		return paymentService.UpdatePayment(payment);		
	}
	
	@DeleteMapping("/deletepayment{id}")
    public void deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
    }
}
