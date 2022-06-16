import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEvent from "./components/AddEvent/AddEvent";
import DetailsEvent from "./components/DetailsEvent/DetailsEvent";
import EventsList from "./components/EventsList/EventsList";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import LoginForm from "./components/LoginForm/LoginForm";
import NavBar from "./components/NavBar/NavBar";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import AuthContextProvider from "./contexts/authContext";
import Cart from "./components/Cart/Cart";
// import Home from "./components/Home/Home";
import CartContextProvider from "./contexts/cartContext";
import EventsContextProvider from "./contexts/eventContext";

const Routing = () => {
  return (
    <AuthContextProvider>
      <EventsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Header />
            {/* <NavBar /> */}
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/add-event" element={<AddEvent />} />
              <Route path="/events" element={<EventsList />} />;
              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </EventsContextProvider>
    </AuthContextProvider>
  );
};

export default Routing;
