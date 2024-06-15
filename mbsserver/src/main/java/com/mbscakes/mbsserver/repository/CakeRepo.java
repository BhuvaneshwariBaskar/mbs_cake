package com.mbscakes.mbsserver.repository;

import org.springframework.stereotype.Repository;

import com.mbscakes.mbsserver.models.Cakes;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface CakeRepo extends JpaRepository<Cakes,UUID> {
	
}
