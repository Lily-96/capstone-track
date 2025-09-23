package Capstone.liliyasavitska.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;
import java.time.LocalDate;

public record TripRequest(
        @NotBlank String title,
        @NotBlank String destination,
        String description,
        @NotNull LocalDate startDate,
        @NotNull LocalDate endDate,
        @NotNull @Positive BigDecimal price,
        @NotNull @Positive Integer maxParticipants
) {
}
