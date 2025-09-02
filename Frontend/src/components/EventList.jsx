import { fetchEvents } from '../api/api';
import { Link } from 'react-router-dom';
import EventForm from './EventForm';
import React, { useEffect, useState } from 'react';

export default function EventList() {
  const [events, setEvents] = useState([]);

  const loadEvents = () => {
    fetchEvents()
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <EventForm onCreated={loadEvents} />
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>
              {event.title} - {new Date(event.startAt).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
