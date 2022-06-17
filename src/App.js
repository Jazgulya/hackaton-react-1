import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import Cart from "./components/Cart/Cart";
// import "./index.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routing />
      <Footer />
      {/* <Cart /> */}
    </div>
  );
};

export default App;
