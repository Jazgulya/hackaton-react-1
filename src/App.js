import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <NavBar /> */}
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
