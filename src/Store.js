import React from "react";

export const Store = React.createContext();

const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "REMOVE_USER":
      console.log("REMOVE USER...");
      return { ...state, user: null };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
