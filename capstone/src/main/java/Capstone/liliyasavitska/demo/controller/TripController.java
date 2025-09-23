package Capstone.liliyasavitska.demo.controller;

import Capstone.liliyasavitska.demo.dto.TripRequest;
import Capstone.liliyasavitska.demo.dto.TripResponse;
import Capstone.liliyasavitska.demo.service.TripService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
@CrossOrigin // per sviluppo locale
public class TripController {

    private final TripService tripService;

    public TripController(TripService tripService) {
        this.tripService = tripService;
    }

    @GetMapping
    public List<TripResponse> all() {
        return tripService.findAll();
    }

    @GetMapping("/{id}")
    public TripResponse byId(@PathVariable Long id) {
        return tripService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TripResponse create(@RequestBody @Valid TripRequest request) {
        return tripService.create(request);
    }

    @PutMapping("/{id}")
    public TripResponse update(@PathVariable Long id, @RequestBody @Valid TripRequest request) {
        return tripService.update(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        tripService.delete(id);
    }
}
