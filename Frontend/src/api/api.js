import axios from 'axios';

export const API_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:8080/api'
    : `http://${window.location.hostname}:8080/api`;

export const fetchEvents = () => axios.get(`${API_URL}/events`);
export const fetchEvent = (id) => axios.get(`${API_URL}/events/${id}`);
export const fetchRsvps = (eventId) => axios.get(`${API_URL}/rsvps/event/${eventId}`);
export const submitRsvp = (eventId, attendeeName, status, comment) =>
  axios.post(`${API_URL}/rsvps`, null, {
    params: { eventId, attendeeName, status, comment }
  });
