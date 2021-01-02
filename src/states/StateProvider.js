import React, { createContext, useContext, useReducer } from "react";

// Create datalayer
export const StateContext = createContext();

// Wrap the app & create the Datalayer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull datalayer back
export const useStateValue = () => useContext(StateContext);
