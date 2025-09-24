package Capstone.liliyasavitska.demo.repository;

import Capstone.liliyasavitska.demo.model.Booking;
import Capstone.liliyasavitska.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUser(User user);
}
