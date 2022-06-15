import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEvent from "./components/AddEvent/AddEvent";
import Cart from "./components/Cart/Cart";
import EventsList from "./components/EventsList/EventsList";
import Home from "./components/Home/Home";
import CartContextProvider from "./contexts/cartContext";
import EventsContextProvider from "./contexts/eventContext";

const Routing = () => {
  
  return (
    <EventsContextProvider>
      <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/events" element={<EventsList />} />;
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </EventsContextProvider>
  );
};

export default Routing;
