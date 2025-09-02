package com.docker_lab2.event_rsvp.web;

import com.docker_lab2.event_rsvp.model.Event;
import com.docker_lab2.event_rsvp.repo.EventRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/events")
public class EventController {
    private final EventRepository repo;
    public EventController(EventRepository repo) { this.repo = repo; }


    @GetMapping
    public List<Event> all() { return repo.findAll(); }


    @PostMapping
    public Event create(@RequestBody Event e) { return repo.save(e); }


    @GetMapping("/{id}")
    public ResponseEntity<Event> one(@PathVariable Long id) {
        return repo.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}