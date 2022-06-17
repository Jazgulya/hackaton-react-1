import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEvent from "./components/AddEvent/AddEvent";
import DetailsEvent from "./components/DetailsEvent/DetailsEvent";
import EventsList from "./components/EventsList/EventsList";
import EditEvent from "./components/EditEvent/EditEvent";
import EventsContextProvider from "./contexts/eventContext";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./contexts/cartContext";

const Routing = () => {
  return (
    <EventsContextProvider>
        <CartContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/add-event" element={<AddEvent />} />
                    <Route path="/events" element={<EventsList />} />;
                    <Route path="/events/:id" element={<DetailsEvent />} />;
                    <Route path="/edit/:id" element={<EditEvent />} />;
                    <Route path="/cart/:id" element={<Cart />} />;
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    </EventsContextProvider>
  );
};

export default Routing;
