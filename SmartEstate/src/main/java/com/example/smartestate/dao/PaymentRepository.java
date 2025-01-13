package com.example.smartestate.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.smartestate.beans.Payment;


@Repository
public interface PaymentRepository extends JpaRepository<Payment,Long>{

	public Payment findByName(String name);
}
