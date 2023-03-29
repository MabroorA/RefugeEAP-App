// import { Scrollbars } from "react-custom-scrollbars";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import './Calendar;.css';
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
/* import {events} from '../data'; */
import "./EAPPage.css";

const locales = {
  "en-GB": require("date-fns/locale/en-GB"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "MEETING1",
    allday: true,
    start: new Date(2023, 1, 3),
    end: new Date(2023, 1, 4),
  },

  {
    title: "MEETING2",
    start: new Date(2023, 2, 3),
    end: new Date(2023, 2, 4),
  },

  {
    title: "MEETING3",
    start: new Date(2023, 2, 3),
    end: new Date(2023, 2, 4),
  },

  {
    title: "MEETING4",
    start: new Date(2023, 2, 3),
    end: new Date(2023, 2, 4),
  },
];

function Calendar2() {
  const [data, setData] = useState([]);
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    fetch("/ReactEventView")
      .then((response) => response.json())
      .then((response) => setData(response.data));
  }, []);

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvent] = useState(events);

  function handleAddEvent() {
    setAllEvent([...allEvents, newEvent]);
  }

  return (
    <>
      <div>
        <p>Add New Event</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} //This part adds in the title for the new event idk if you want this to be changed also
        />
      </div>
      <div>
        <div className="event-calendar">
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 400, margin: "50px", zIndex: 0 }} //Had an issue with event calender overlapping the navbar added to the navbar.css z-index: 2
          />
        </div>
      </div>
    </>
  );
}

export default Calendar2;
