package com.example.smartestate.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.smartestate.beans.Payment;
import com.example.smartestate.dao.PaymentRepository;


@Service
public class PaymentService {

	@Autowired
	PaymentRepository paymentRepository;
	
	public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment addPayment(Payment payment) {
        return paymentRepository.save(payment);
    }
    
    public Payment getPayment(Long id) {
		Payment payment = paymentRepository.findById(id).orElse(null);
		return payment;
	}
    
    public Payment UpdatePayment (Payment payment) 
	{
		// TODO Auto-generated method stub
		return paymentRepository.save(payment);
	}

    
    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
}
