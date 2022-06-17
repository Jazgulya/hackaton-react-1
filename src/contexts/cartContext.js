import React, { useReducer } from "react";

export const cartContext = React.createContext();

const INIT_STATE = {
  cart: null,
  count: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
        count: action.payload.products.length,
      };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addTicketToCart(ticket) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        tickets: [],
        totalPrice: 0,
      };
    }
    let newTicket = {
      item: ticket,
      count: 1,
      subPrice: ticket.price,
    };
    let isTicketInCart = cart.products.some(
      item => item.item.id === ticket.id
    );
    if (isTicketInCart) {
      cart.tickets = cart.tickets.filter(item => item.item.id !== ticket.id);
    } else {
      cart.tickets.push(newTicket);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function checkTicketInCart(ticket) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        tickets: [],
        totalPrice: 0,
      };
    }
    let isTicketInCart = cart.tickets.some(
      item => item.item.id === ticket.id
    );
    return isTicketInCart;
  }

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        tickets: [],
        totalPrice: 0,
      };
    }
    cart.totalPrice = cart.tickets.reduce((prev, curr) => {
      return prev + curr.subPrice;
    }, 0);
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
    localStorage.setItem(JSON.stringify("cart", cart))
  }

  function changeTicketCount(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.tickets = cart.tickets.map(item => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = item.count * item.item.price;
      }
      return item;
    });
  localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.tickets = cart.tickets.filter(item => item.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }


  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        count: state.count,
        addTicketToCart,
        checkTicketInCart,
        getCart,
        changeTicketCount,
        deleteFromCart,
      }}>
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
