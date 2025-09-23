package Capstone.liliyasavitska.demo.repository;

import Capstone.liliyasavitska.demo.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
