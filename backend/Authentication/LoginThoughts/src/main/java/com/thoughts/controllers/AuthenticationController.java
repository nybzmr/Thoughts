package thoughts.SpringThoughtsLogin.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import thoughts.SpringThoughtsLogin.models.ApplicationUser;
import thoughts.SpringThoughtsLogin.models.LoginResponseDTO;
import thoughts.SpringThoughtsLogin.models.RegistrationDTO;
import thoughts.SpringThoughtsLogin.services.AuthenticationService;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/signin")
    public ApplicationUser signinUser(@RequestBody RegistrationDTO body){
        return authenticationService.signinUser(body.getUsername(), body.getPassword());
    }
    
    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body){
        return authenticationService.loginUser(body.getUsername(), body.getPassword());
    }
}   
