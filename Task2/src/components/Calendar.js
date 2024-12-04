import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="calendar-container">
      <ReactCalendar
        value={selectedDate}
        onChange={setSelectedDate}
        tileClassName={({ date, view }) => 
          view === "month" && date.toDateString() === new Date().toDateString() 
          ? "highlight-today" : ""}
      />
    </div>
  );
};

export default Calendar;
