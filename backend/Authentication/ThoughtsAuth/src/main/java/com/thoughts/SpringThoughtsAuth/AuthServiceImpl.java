package com.thoughts.SpringThoughtsAuth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService{

	@Autowired
	private AuthRepository Authrepository;
	
	@Override
	public AuthModel addUser(AuthModel authmodel) {
		return this.Authrepository.save(authmodel);
	}

	

}
