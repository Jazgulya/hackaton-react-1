import React, { useContext, useEffect } from "react";
import { eventContext } from "../../contexts/eventContext";
import EventCard from "../EventCard/EventCard";

const EventsList = () => {
  const { events, getEvents } = useContext(eventContext);

  useEffect(() => {
    getEvents();
  }, []);
  // console.log(events);
  return (
    <div style={{ display: "flex" }}>
      {events.map((item) => (
        <EventCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default EventsList;
