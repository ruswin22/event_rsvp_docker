package com.docker_lab2.event_rsvp.web;

import com.docker_lab2.event_rsvp.model.Rsvp;
import com.docker_lab2.event_rsvp.model.RsvpStatus;
import com.docker_lab2.event_rsvp.repo.EventRepository;
import com.docker_lab2.event_rsvp.repo.RsvpRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/rsvps")
public class RsvpController {
    private final RsvpRepository rsvpRepo;
    private final EventRepository eventRepo;


    public RsvpController(RsvpRepository rsvpRepo, EventRepository eventRepo) {
        this.rsvpRepo = rsvpRepo; this.eventRepo = eventRepo; }


    @GetMapping("/event/{eventId}")
    public List<Rsvp> byEvent(@PathVariable Long eventId) { return rsvpRepo.findByEventId(eventId); }


    @PostMapping
    public ResponseEntity<Rsvp> submit(@RequestParam Long eventId,
                                       @RequestParam String attendeeName,
                                       @RequestParam RsvpStatus status,
                                       @RequestParam(required = false) String comment) {
        return eventRepo.findById(eventId).map(ev -> {
            Rsvp r = new Rsvp(attendeeName, status, comment, ev);
            return ResponseEntity.ok(rsvpRepo.save(r));
        }).orElse(ResponseEntity.notFound().build());
    }
}
