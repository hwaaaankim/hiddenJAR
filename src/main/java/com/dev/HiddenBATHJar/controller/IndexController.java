package com.dev.HiddenBATHJar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

	@GetMapping({"/", "", "/index"})
	public String home() {
		
		return "front/index";
	}
	
	@GetMapping("/about")
	public String about() {
		
		return "front/about";
	}
	
	@GetMapping("/history")
	public String history() {
		
		return "front/history";
	}
	
	@GetMapping("/construction")
	public String construction() {
		
		return "front/construction";
	}
	
	@GetMapping("/constructionDetail")
	public String constructionDetail() {
		
		return "front/constructionDetail";
	}
	
	@GetMapping("/faq")
	public String faq() {
		
		return "front/faq";
	}
	
	@GetMapping("/notice")
	public String notice() {
		
		return "front/notice";
	}
	
	@GetMapping("/noticeDetail")
	public String noticeDetail() {
		
		return "front/noticeDetail";
	}
	
	@GetMapping("/contact")
	public String contact() {
		
		return "front/contact";
	}
	
	@GetMapping("/productList")
	public String productList() {
		
		return "front/productList";
	}
	
	@GetMapping("/productDetail")
	public String productDetail() {
		
		return "front/productDetail";
	}
}
