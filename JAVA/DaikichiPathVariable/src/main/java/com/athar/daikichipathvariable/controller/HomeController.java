package com.athar.daikichipathvariable.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	 @RequestMapping("daikichi/travel/{id}")
	
	public String home( @PathVariable("id") String id) {
		return "Congratulations! you will soon travel to " + id + "!";
	}
	 @RequestMapping("daikichi/lotto/{id}")
	 public String home( @PathVariable("id") int id) {
		 if(id % 2==0)
			{return "You will take a long journey in the near future, but be wary of tempting offers";}
		 else {return "You have enjoyed the fruits of your labor but now is a great time to spend time with family";}
		}
		

}