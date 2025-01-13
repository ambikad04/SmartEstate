package com.example.smartestate.beans;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Property {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
    private Long id;
	
	@Column(name="name")
    private String name;
	
	@Column(name="details")
    private String details;
	
	@Column(name="price")
    private Integer price;
	
	@Column(name="image")
    @Lob()
    private byte[] image;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public Property(Long id, String name, String details, Integer price, byte[] image) {
		super();
		this.id = id;
		this.name = name;
		this.details = details;
		this.price = price;
		this.image = image;
	}

	public Property() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Property [id=" + id + ", name=" + name + ", details=" + details + ", price=" + price + ", image="
				+ Arrays.toString(image) + "]";
	}
	
	 
    
}
