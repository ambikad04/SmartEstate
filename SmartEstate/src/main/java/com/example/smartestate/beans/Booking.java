package com.example.smartestate.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Booking {

	@Id
	@Column(name="uid")
	private Integer UserId;
	
	@Column(name="uname")
	private String UserName;
	
	@Column(name="pid")
	private Integer PropertyId;
	
	@Column(name="sdate")
	private String  StartDate;
	
	@Column(name="edate")
	private String EndDate;

	public Integer getUserId() {
		return UserId;
	}

	public void setUserId(Integer userId) {
		UserId = userId;
	}

	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public Integer getPropertyId() {
		return PropertyId;
	}

	public void setPropertyId(Integer propertyId) {
		PropertyId = propertyId;
	}

	public String getStartDate() {
		return StartDate;
	}

	public void setStartDate(String startDate) {
		StartDate = startDate;
	}

	public String getEndDate() {
		return EndDate;
	}

	public void setEndDate(String endDate) {
		EndDate = endDate;
	}

	public Booking(Integer userId, String userName, Integer propertyId, String startDate, String endDate) {
		super();
		UserId = userId;
		UserName = userName;
		PropertyId = propertyId;
		StartDate = startDate;
		EndDate = endDate;
	}

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Booking [UserId=" + UserId + ", UserName=" + UserName + ", PropertyId=" + PropertyId + ", StartDate="
				+ StartDate + ", EndDate=" + EndDate + "]";
	}
	
	
}
