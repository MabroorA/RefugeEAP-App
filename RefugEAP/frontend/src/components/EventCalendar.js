import { Scrollbars } from "react-custom-scrollbars";
import React, { useState, useEffect } from "react";
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import './EventCalendar.css';
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
/* import {events} from '../data'; */

const locales = {
  "en-GB": require('date-fns/locale/en-GB')
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "MEETING1",
    allday: true,
    start: new Date(2023, 0, 31),
    end: new Date(2023, 1, 4)
  },

  {
    title: "MEETING2",
    start: new Date(2023, 2, 3),
    end: new Date(2023, 2, 4)
  },

  {
    title: "MEETING3",
    start: new Date(2023, 2, 3),
    end: new Date(2023, 2, 4)
  },

  {
    title: "MEETING4",
    start: new Date(2023, 2, 3),
    end: new Date(2023, 2, 4)
  }
]



 function EventList() {
  /*return (
    <section>
      {events.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
    </section>
  );*/
}

/*
const EventCard = (props) => {
  const { event, date, time, more } = props.event;
  return (
    <div className="event-card">
      <h4>Event: {event}</h4>
      <h4>Date: {date} </h4>
      <h4>Time: {time} </h4>
      <h4>More: {more} </h4>
    </div>
  );
}; */


function EventCalendar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/ReactEventView")
      .then((response) => response.json())
      .then((response) => setData(response.data));
  }, []);

  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvent] = useState(events)

    function handleAddEvent() {
      setAllEvent([...allEvents, newEvent])
    }


    return (
    <section className="section" id="event">
      <div className="section-title">
        <h2>Events</h2>
      </div>
      <div>
      <p>Add New Event</p>
      </div>
      <div>
        <input type="text" placeholder="Add Title" style={{width: "20%", marginRight:"10px"}} 
        value={newEvent.title} onChange = {(e) => setNewEvent({... newEvent, title: e.target.value})}  //This part adds in the title for the new event idk if you want this to be changed also
        />
      </div>
      <div>
        <div className="event-calendar">
          <Calendar 
            localizer={localizer}
            events={allEvents} 
            startAccessor="start" 
            endAccessor="end" 
            style={{height: 400, margin: "50px", zIndex: 0}}    //Had an issue with event calender overlapping the navbar added to the navbar.css z-index: 2
          />
        </div>
      </div>
    </section>
  );
}

export default EventCalendar