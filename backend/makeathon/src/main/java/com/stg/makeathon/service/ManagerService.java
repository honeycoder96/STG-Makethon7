package com.stg.makeathon.service;

import java.util.List;

import com.stg.makeathon.entity.Address;
import com.stg.makeathon.entity.Manager;

public interface ManagerService {
	
	public List<Address> getAddressBook (String emailId);
	public String addManager (Manager manager);
	public String addAddress (Manager manager);
	public String createMailingList(String listName, Manager manager);
}
