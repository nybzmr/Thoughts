package com.thoughts.SpringThoughtsAuth;

import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Thoughts")
public class AuthController {
	
	@Autowired
	private AuthService authservice;
	
	private Vector<AuthModel> uservector = new Vector<>();
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/")
	public AuthModel createpost(@RequestBody AuthModel authmodel) {
		
		AuthModel user = this.authservice.addUser(authmodel);
		uservector.add(user);
		
		return user;
		
	}
	

}
