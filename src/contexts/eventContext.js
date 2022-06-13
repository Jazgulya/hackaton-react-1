import axios from "axios";
import React, { useReducer } from "react";
export const eventContext = React.createContext();

const API = "http://localhost:8000/events";
const INIT_STATE = {
  events: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_EVENTS":
      return {
        ...state,
        events: action.payload.data,
      };
    default:
      return state;
  }
}

const EventsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function addEvent(newEvent) {
    await axios.post(API, newEvent);
    getEvents();
  }
  async function getEvents() {
    let res = await axios(API);
    dispatch({
      type: "GET_EVENTS",
      payload: res,
    });
  }
  return (
    <eventContext.Provider
      value={{
        events: state.events,
        addEvent,
        getEvents,
      }}
    >
      {children}
    </eventContext.Provider>
  );
};
export default EventsContextProvider;
