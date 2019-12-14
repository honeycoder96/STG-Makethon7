package com.stg.makeathon.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Manager {

	@Id
	private String id;
	private String managerName;
	@Indexed(unique = true)
	private String managerEmailId;
	private List<Address> addressBook;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getManagerName() {
		return managerName;
	}
	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}
	public String getManagerEmailId() {
		return managerEmailId;
	}
	public void setManagerEmailId(String managerEmailId) {
		this.managerEmailId = managerEmailId;
	}
	public List<Address> getAddressBook() {
		return addressBook;
	}
	public void setAddressBook(List<Address> addressBook) {
		this.addressBook = addressBook;
	}
}
