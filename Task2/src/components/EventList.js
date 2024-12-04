import React from "react";

const EventList = ({ events, deleteEvent }) => {
  return (
    <div className="event-list">
      <h2>Scheduled Events</h2>
      {events.length === 0 ? (
        <p>No events scheduled yet. Add your first event!</p>
      ) : (
        events.map((event) => (
          <div key={event.id} className="event-item">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <button onClick={() => deleteEvent(event.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;
