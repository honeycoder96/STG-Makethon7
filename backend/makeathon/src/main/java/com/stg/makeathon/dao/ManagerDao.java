package com.stg.makeathon.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.stg.makeathon.entity.Manager;

@Repository
public interface ManagerDao extends MongoRepository<Manager, String> {
	public List<Manager> findByManagerEmailId(String managerEmailId);
	
}
