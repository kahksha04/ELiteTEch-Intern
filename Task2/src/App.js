import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";

const App = () => {
  const [events, setEvents] = useState(() => {
    // Load events from localStorage when the app initializes
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  // Save events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Calendar App</h1>
      <div className="calendar-app">
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <EventForm selectedDate={selectedDate} addEvent={addEvent} />
      </div>
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;
