package com.docker_lab2.event_rsvp.repo;

import com.docker_lab2.event_rsvp.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EventRepository extends JpaRepository<Event, Long> {}