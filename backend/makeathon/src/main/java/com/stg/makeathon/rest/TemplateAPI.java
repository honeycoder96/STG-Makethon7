package com.stg.makeathon.rest;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stg.makeathon.entity.Template;

@RestController
@RequestMapping(path = "template")
public class TemplateAPI {

	@PostMapping(path = "/addTemplate")
	public ResponseEntity<String> addTemplate(@RequestBody Template template){
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@PostMapping(path = "/getTemplateByEmailId")
	public ResponseEntity<List<Template>> getTemplateByEmailId(@RequestBody String emailId){
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping(path = "/getTemplate")
	public ResponseEntity<Template> getTemplate (@RequestBody Integer id){
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
