package com.stg.makeathon.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stg.makeathon.dto.Receiving;
import com.stg.makeathon.entity.Manager;
import com.stg.makeathon.service.ManagerService;

@RestController
@RequestMapping(path = "manager")
public class ManagerAPI {
	
	@Autowired
	private ManagerService srv;

	@PostMapping(path = "/getManager", produces = "application/json")
	public ResponseEntity<Manager> getAddressBook(@RequestBody String emailId) {
		Manager m = null;
		return new ResponseEntity<>(m, HttpStatus.OK);
	}

	@PostMapping(path = "/addManager")
	public ResponseEntity<String> addManager(@RequestBody Manager manager) {
		String a = srv.addManager(manager);
		return new ResponseEntity<String>(a,HttpStatus.CREATED);
	}

	@PostMapping(path = "/addAddress")
	public ResponseEntity<String> addAddress(@RequestBody Manager manager) {
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PostMapping(path = "/createMailingList")
	public ResponseEntity<String> createMailingList(@RequestBody Receiving a) {
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

}
