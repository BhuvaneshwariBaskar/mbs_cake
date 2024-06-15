package com.mbscakes.mbsserver.models;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;



@Entity
public class Cakes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID cake_id;
	@Column(name = "cake_name")
	private String cake_name;
	@Column(name = "cake_image")
	private String cake_image;
	@Column(name = "cake_genre")
	private String cake_genre;
	@Column(name = "cake_price")
	private Integer cake_price;
	@Column(name = "cake_rating")
	private Integer cake_rating;
	
	
	public UUID getCake_id() {
		return cake_id;
	}


	public void setCake_id(UUID cake_id) {
		this.cake_id = cake_id;
	}


	public String getCake_name() {
		return cake_name;
	}


	public void setCake_name(String cake_name) {
		this.cake_name = cake_name;
	}


	public String getCake_image() {
		return cake_image;
	}


	public void setCake_image(String cake_image) {
		this.cake_image = cake_image;
	}


	public String getCake_genre() {
		return cake_genre;
	}


	public void setCake_genre(String cake_genre) {
		this.cake_genre = cake_genre;
	}


	public Integer getCake_price() {
		return cake_price;
	}


	public void setCake_price(Integer cake_price) {
		this.cake_price = cake_price;
	}


	public Integer getCake_rating() {
		return cake_rating;
	}


	public void setCake_rating(Integer cake_rating) {
		this.cake_rating = cake_rating;
	}


	@Override
	public String toString() {
		return "Cakes [cake_id=" + cake_id + ", cake_name=" + cake_name + ", cake_image=" + cake_image + ", cake_genre="
				+ cake_genre + ", cake_price=" + cake_price + ", cake_rating=" + cake_rating + "]";
	}
	
	
	
}
