import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEvent from "./components/AddEvent/AddEvent";
import EventsList from "./components/EventsList/EventsList";
import EventsContextProvider from "./contexts/eventContext";

const Routing = () => {
  return (
    <EventsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/events" element={<EventsList />} />;
        </Routes>
      </BrowserRouter>
    </EventsContextProvider>
  );
};

export default Routing;
