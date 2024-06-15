package com.mbscakes.mbsserver.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mbscakes.mbsserver.dto.CakesDTO;
import com.mbscakes.mbsserver.models.Cakes;
import com.mbscakes.mbsserver.repository.CakeRepo;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/v1/cakes")
public class CakeController {
	@Autowired 
	private CakeRepo cakerepo;
	
	@PostMapping("/create")
	public ResponseEntity<String> CreateCake(@RequestBody Cakes cake) {
		  try {
	            cakerepo.save(cake);
	            System.out.println(cake);
	            return ResponseEntity.status(HttpStatus.CREATED).body("Cake creation successful");
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Cake creation failed: " + e.getMessage());
	        }
	}
	
	@PostMapping("/createBulk")
	public ResponseEntity<String> CreateBulkCake(@RequestBody List<Cakes> cake){
		try {
			for(Cakes cakedata:cake) {
				cakerepo.save(cakedata);
				 System.out.println(cakedata);
			}
			return ResponseEntity.status(HttpStatus.CREATED).body("Bulk cake data creation successfull");
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Bulk cake data creation Failed"+ e.getMessage());
		}
	}
	
	@GetMapping("/getCakes")
	public List<Cakes> GetCakes(){
		return cakerepo.findAll();
	}
}
