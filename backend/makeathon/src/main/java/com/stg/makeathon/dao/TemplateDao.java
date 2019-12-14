package com.stg.makeathon.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.stg.makeathon.entity.Template;

public interface TemplateDao extends MongoRepository<Template, Integer>{

}
