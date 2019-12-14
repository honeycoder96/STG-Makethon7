package com.stg.makeathon.entity;

import java.util.List;

public class Address {

	private String name;
	private String emailId;
	private String company;
	private String mobileNo;
	private List<String> mailingLists;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public List<String> getMailingLists() {
		return mailingLists;
	}
	public void setMailingLists(List<String> mailingLists) {
		this.mailingLists = mailingLists;
	}
	
	
}
