package com.docker_lab2.event_rsvp.model;

import jakarta.persistence.*;

@Entity
public class Rsvp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String attendeeName;


    @Enumerated(EnumType.STRING)
    private RsvpStatus status;


    private String comment;


    @ManyToOne(optional = false)
    private Event event;


    public Rsvp() {}


    public Rsvp(String attendeeName, RsvpStatus status, String comment, Event event) {
        this.attendeeName = attendeeName; this.status = status; this.comment = comment; this.event = event;
    }


    public Long getId() { return id; }
    public String getAttendeeName() { return attendeeName; }
    public void setAttendeeName(String attendeeName) { this.attendeeName = attendeeName; }
    public RsvpStatus getStatus() { return status; }
    public void setStatus(RsvpStatus status) { this.status = status; }
    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }
    public Event getEvent() { return event; }
    public void setEvent(Event event) { this.event = event; }
}