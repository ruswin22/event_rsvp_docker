import React, { useState } from 'react';
import { submitRsvp } from '../api/api';

export default function RsvpForm({ eventId, onSubmitted }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('YES');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitRsvp(eventId, name, status, comment)
      .then(() => {
        onSubmitted();
        setName('');
        setComment('');
        setStatus('YES');
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit RSVP</h3>
      <input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="YES">YES</option>
        <option value="NO">NO</option>
        <option value="MAYBE">MAYBE</option>
      </select>
      <input placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
