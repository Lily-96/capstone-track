package Capstone.liliyasavitska.demo.service;

import Capstone.liliyasavitska.demo.dto.TripRequest;
import Capstone.liliyasavitska.demo.dto.TripResponse;
import Capstone.liliyasavitska.demo.exception.NotFoundException;
import Capstone.liliyasavitska.demo.model.Trip;
import Capstone.liliyasavitska.demo.repository.TripRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TripService {

    private final TripRepository tripRepository;

    public TripService(TripRepository tripRepository) {
        this.tripRepository = tripRepository;
    }

    public List<TripResponse> findAll() {
        return tripRepository.findAll().stream().map(this::toResponse).toList();
    }

    public TripResponse findById(Long id) {
        Trip t = tripRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Trip %d non trovato".formatted(id)));
        return toResponse(t);
    }

    public TripResponse create(TripRequest req) {
        Trip t = Trip.builder()
                .title(req.title())
                .destination(req.destination())
                .description(req.description())
                .startDate(req.startDate())
                .endDate(req.endDate())
                .price(req.price())
                .maxParticipants(req.maxParticipants())
                .build();
        t = tripRepository.save(t);
        return toResponse(t);
    }

    public TripResponse update(Long id, TripRequest req) {
        Trip t = tripRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Trip %d non trovato".formatted(id)));
        t.setTitle(req.title());
        t.setDestination(req.destination());
        t.setDescription(req.description());
        t.setStartDate(req.startDate());
        t.setEndDate(req.endDate());
        t.setPrice(req.price());
        t.setMaxParticipants(req.maxParticipants());
        return toResponse(t);
    }

    public void delete(Long id) {
        if (!tripRepository.existsById(id)) {
            throw new NotFoundException("Trip %d non trovato".formatted(id));
        }
        tripRepository.deleteById(id);
    }

    private TripResponse toResponse(Trip t) {
        return new TripResponse(
                t.getId(),
                t.getTitle(),
                t.getDestination(),
                t.getDescription(),
                t.getStartDate(),
                t.getEndDate(),
                t.getPrice(),
                t.getMaxParticipants()
        );
    }
}
