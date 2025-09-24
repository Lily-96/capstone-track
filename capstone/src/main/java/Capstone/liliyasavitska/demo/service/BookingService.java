package Capstone.liliyasavitska.demo.service;

import Capstone.liliyasavitska.demo.model.Booking;
import Capstone.liliyasavitska.demo.model.User;
import Capstone.liliyasavitska.demo.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public Booking save(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> findByUser(User user) {
        return bookingRepository.findByUser(user);
    }
}
