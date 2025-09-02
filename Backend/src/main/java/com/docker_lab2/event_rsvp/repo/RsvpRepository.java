package com.docker_lab2.event_rsvp.repo;

import com.docker_lab2.event_rsvp.model.Rsvp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RsvpRepository extends JpaRepository<Rsvp, Long> {
    List<Rsvp> findByEventId(Long eventId);
}
