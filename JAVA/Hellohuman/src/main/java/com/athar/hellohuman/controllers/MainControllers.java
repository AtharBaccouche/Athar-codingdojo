package com.athar.hellohuman.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class MainControllers {
	
	@RequestMapping("/")
	public String hello(@RequestParam(value= "name",required=false) String name, 
			@RequestParam(value= "lastname", required=false) String lastname,
			@RequestParam(value= "time", required=false) Integer time) {
		
		
		if(time!= null && time > 0) {
			String message = "";
			for(int i = 0; i < time; i++) {
				if(name != null && lastname != null && time!=null) {
					message += "Hello " + name + " " + lastname + " ";
				}else if(name != null && time!=null) {
					message += "Hello " + name + " ";
				}
				else {
					message += "Hello Human ";
				}
			}
			return message;
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		if(name!=null && lastname!=null) {
			return "Hello " + name + " "+  lastname;
			}
		else if(name!=null) { return "Hello " + name;}
	
		 
		return "Hello Human";
		
	
	}
	
	
	
}
