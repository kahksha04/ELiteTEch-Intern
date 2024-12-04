import React, { useState } from "react";

const EventForm = ({ selectedDate, addEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    const newEvent = {
      id: Date.now(),
      title,
      description,
      date: selectedDate.toDateString(),
    };
    addEvent(newEvent);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h2>Add Event</h2>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
