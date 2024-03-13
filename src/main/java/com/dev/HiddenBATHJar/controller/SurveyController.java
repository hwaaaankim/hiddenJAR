package com.dev.HiddenBATHJar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/survey")
public class SurveyController {

	@GetMapping({"", "/"})
	public String surveyHome() {
		
		return "front/survey/index";
	}
	
	@GetMapping("/information")
	public String surveyInformation() {
		
		return "front/survey/information";
	}
}
