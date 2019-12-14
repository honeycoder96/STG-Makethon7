package com.stg.makeathon.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Template {
	
	@Id
	private String id;
	@Indexed
	private String managerEmailId;
	private String templateJson;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getManagerEmailId() {
		return managerEmailId;
	}
	public void setManagerEmailId(String managerEmailId) {
		this.managerEmailId = managerEmailId;
	}
	public String getTemplateJson() {
		return templateJson;
	}
	public void setTemplateJson(String templateJson) {
		this.templateJson = templateJson;
	}
	

}
