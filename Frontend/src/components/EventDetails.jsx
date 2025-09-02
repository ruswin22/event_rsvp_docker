import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEvent, fetchRsvps } from '../api/api';
import RsvpForm from './RsvpForm';

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [rsvps, setRsvps] = useState([]);

  const loadRsvps = () => fetchRsvps(id).then(res => setRsvps(res.data)).catch(err => console.error(err));

  useEffect(() => {
    fetchEvent(id).then(res => setEvent(res.data)).catch(err => console.error(err));
    loadRsvps();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Location: {event.location}</p>
      <p>Date: {new Date(event.startAt).toLocaleString()}</p>

      <RsvpForm eventId={id} onSubmitted={loadRsvps} />

      <h3>RSVPs</h3>
      <ul>
        {rsvps.map(r => (
          <li key={r.id}>{r.attendeeName} - {r.status} {r.comment && `(${r.comment})`}</li>
        ))}
      </ul>
    </div>
  );
}
