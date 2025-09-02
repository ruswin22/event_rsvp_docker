import React, { useState } from 'react';
import axios from 'axios';

export default function EventForm({ onCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startAt, setStartAt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/events', { title, description, location, startAt })
      .then(() => {
        setTitle('');
        setDescription('');
        setLocation('');
        setStartAt('');
        onCreated();
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Event</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required />
      <input type="datetime-local" value={startAt} onChange={e => setStartAt(e.target.value)} required />
      <button type="submit">Add Event</button>
    </form>
  );
}
