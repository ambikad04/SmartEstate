package com.example.smartestate.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Payment {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
    private Long id;
	
	@Column(name="name")
    private String name;
	
	@Column(name="email")
    private String email;
	
	@Column(name="city")
    private String city;
	
	@Column(name="pid")
    private Integer propertyid;
	
	@Column(name="cname")
    private String cardname;
	
	@Column(name="cnumber")
    private Integer cardnumber;

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Integer getPropertyid() {
		return propertyid;
	}

	public void setPropertyid(Integer propertyid) {
		this.propertyid = propertyid;
	}

	public String getCardname() {
		return cardname;
	}

	public void setCardname(String cardname) {
		this.cardname = cardname;
	}

	public Integer getCardnumber() {
		return cardnumber;
	}

	public void setCardnumber(Integer cardnumber) {
		this.cardnumber = cardnumber;
	}

	public Payment(Long id, String name, String email, String city, Integer propertyid, String cardname,
			Integer cardnumber) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.city = city;
		this.propertyid = propertyid;
		this.cardname = cardname;
		this.cardnumber = cardnumber;
	}

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Payment [id=" + id + ", name=" + name + ", email=" + email + ", city=" + city + ", propertyid="
				+ propertyid + ", cardname=" + cardname + ", cardnumber=" + cardnumber + "]";
	}
	
	
}
