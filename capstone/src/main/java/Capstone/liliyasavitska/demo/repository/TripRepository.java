package Capstone.liliyasavitska.demo.repository;


import Capstone.liliyasavitska.demo.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripRepository extends JpaRepository<Trip, Long> {
}
