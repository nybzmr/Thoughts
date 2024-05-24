package com.thoughts.SpringThoughtsPosts;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="User")
public class User {
	
	
	@Id
	@Column(name="ID")
	private int id;
	
	@Column(name="Name")
	private String name;
}
