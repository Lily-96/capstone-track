package Capstone.liliyasavitska.demo.controller;

import Capstone.liliyasavitska.demo.model.Booking;
import Capstone.liliyasavitska.demo.model.BookingStatus;
import Capstone.liliyasavitska.demo.model.Trip;
import Capstone.liliyasavitska.demo.model.User;
import Capstone.liliyasavitska.demo.repository.TripRepository;
import Capstone.liliyasavitska.demo.repository.UserRepository;
import Capstone.liliyasavitska.demo.service.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;
    private final UserRepository userRepository;
    private final TripRepository tripRepository;

    public BookingController(BookingService bookingService, UserRepository userRepository, TripRepository tripRepository) {
        this.bookingService = bookingService;
        this.userRepository = userRepository;
        this.tripRepository = tripRepository;
    }

    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody Map<String, Long> payload, Principal principal) {
        if (principal == null) return ResponseEntity.status(401).build();

        User user = userRepository.findByEmail(principal.getName())
                .orElseThrow(() -> new RuntimeException("User non trovato"));

        Long tripId = payload.get("tripId");
        Trip trip = tripRepository.findById(tripId)
                .orElseThrow(() -> new RuntimeException("Trip non trovato"));

        Booking booking = Booking.builder()
                .user(user)
                .trip(trip)
                .status(BookingStatus.PENDING)
                .build();

        Booking saved = bookingService.save(booking);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/me")
    public ResponseEntity<List<Booking>> getMyBookings(Principal principal) {
        if (principal == null) return ResponseEntity.status(401).build();

        User user = userRepository.findByEmail(principal.getName())
                .orElseThrow(() -> new RuntimeException("User non trovato"));

        return ResponseEntity.ok(bookingService.findByUser(user));
    }
}
