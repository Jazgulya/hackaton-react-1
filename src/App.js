import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CartContextProvider from "./contexts/cartContext";

const App = () => {

  return (
    <div>
      <CartContextProvider>
        <Header />
        <NavBar />  
        <Routing />
        <Footer />
      </CartContextProvider>
    </div>
  );
};

export default App;
