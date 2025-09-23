package Capstone.liliyasavitska.demo.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public record TripResponse(
        Long id,
        String title,
        String destination,
        String description,
        LocalDate startDate,
        LocalDate endDate,
        BigDecimal price,
        Integer maxParticipants
) {
}
