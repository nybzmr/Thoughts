package com.thoughts.SpringThoughtsAuth;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Users")
public class AuthModel {
	
	public AuthModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AuthModel(int id, String emailId, String password) {
		super();
		Id = id;
		this.Email = emailId;
		Password = password;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getEmailId() {
		return Email;
	}

	public void setEmailId(String emailId) {
		Email = emailId;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	
	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE)
	private int Id;
	

	private String Email;
	
	private String Password;

	@Override
	public String toString() {
		return "AuthModel [Id=" + Id + ", emailId=" + Email + ", Password=" + Password + "]";
	}

}
