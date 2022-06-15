import React, { useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import Cart from "./components/Cart/Cart";

const App = () => {

  return (
    <div>
      
      <Header />
      <NavBar />
      <Routing />
      <Footer />
      {/* <Cart /> */}
    </div>
  );
};

export default App;
