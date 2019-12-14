package com.stg.makeathon.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stg.makeathon.dao.ManagerDao;
import com.stg.makeathon.entity.Address;
import com.stg.makeathon.entity.Manager;

@Service(value="managerService")
public class ManagerServiceImpl implements ManagerService {
	
	@Autowired
	private ManagerDao dao;

	@Override
	public List<Address> getAddressBook(String Id) {
		Manager m = dao.findById(Id).get();
		return m.getAddressBook();
	}

	@Override
	public String addManager(Manager manager) {
		Manager m = dao.save(manager);
		return m.getId();
	}

	

	@Override
	public String createMailingList(String listName, Manager manager) {
		try {
			Manager fromDao = dao.findById(manager.getId()).get();
			List<Address> fromApi = manager.getAddressBook();
			List<Address> fD = fromDao.getAddressBook();
			
			Set<Address> intersection = fD.stream()
					.distinct()
					.filter(fromApi::contains)
					.collect(Collectors.toSet());
			
			for(Address a: intersection) {
				if(a.getMailingLists() == null) {
					a.setMailingLists(new ArrayList<String>());
				}
				a.getMailingLists().add(listName);
			}
			return "nice";
			
		} catch (Exception e) {
			return "no manager found";
		}
	}

	@Override
	public String addAddress(Manager manager) {
		Manager fromDao = dao.findById(manager.getId()).get();
		fromDao.getAddressBook().addAll(manager.getAddressBook());
		return null;
	}

}
