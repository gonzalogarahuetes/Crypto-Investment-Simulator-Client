import React, { createContext, useContext, useReducer } from "react";

import { actionTypes } from "./actionTypes";
import { reducer } from "./reducer";

const CryptoContext = createContext(null);

const initialState = {
  wallet: {},
  cryptos: {},
};

export function CryptoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    ...state,
  };
  return (
    <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
  );
}

export function useCrypto() {
  const context = useContext(CryptoContext);
  if (!context) return null;
  return context;
}

export default CryptoContext;
