import { Scrollbars } from "react-custom-scrollbars";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {events} from '../data'

function EventList() {
  return (
    <section>
      {events.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
    </section>
  );
}
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
};


const EventCalendar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/ReactEventView")
      .then((response) => response.json())
      .then((response) => setData(response.data));
  }, []);

    const [value, onChange] = useState(new Date());
    return (
    <section className="section" id="event">
      <div className="section-title">
        <h2>Events</h2>
      </div>
      <div className="section-center event-center">
        <div className="event-calendar">
          <Calendar onChange={onChange} value={value} className="event-table"/>
        </div>
        <div className="event-events">
          <Scrollbars className="event-scroll">
            <EventList />
          </Scrollbars>
        </div>
      </div>
    </section>
  );
}

export default EventCalendar