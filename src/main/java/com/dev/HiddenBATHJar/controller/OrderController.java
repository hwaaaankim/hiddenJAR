package com.dev.HiddenBATHJar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/order")
public class OrderController {

	@GetMapping({"", "/"})
	public String mirrorHome() {
		
		return "front/order/mirror/index";
	}
	
	@GetMapping("/information")
	public String mirrorInformation() {
		
		return "front/order/mirror/information";
	}
	
	@GetMapping("/top")
	public String topHome() {
		
		return "front/order/top/index";
	}
	
	@GetMapping("/topInformation")
	public String topInformation() {
		
		return "front/order/top/information";
	}
	
	@GetMapping("/low")
	public String lowHome() {
		
		return "front/order/low/index";
	}
	
	@GetMapping("/lowInformation")
	public String lowInformation() {
		
		return "front/order/low/information";
	}
	@GetMapping("/flap")
	public String flapHome() {
		
		return "front/order/flap/index";
	}
	
	@GetMapping("/flapInformation")
	public String flapInformation() {
		
		return "front/order/flap/information";
	}
	@GetMapping("/slide")
	public String slideHome() {
		
		return "front/order/slide/index";
	}
	
	@GetMapping("/slideInformation")
	public String slideInformation() {
		
		return "front/order/slide/information";
	}
}
