import React, { createContext, useContext, useReducer } from "react";

import { actionTypes } from "./actionTypes";
import { reducer } from "./reducer";

const AuthContext = createContext(null);

const initialState = {
  currentUser: null,
  isSigningIn: false,
  isSigningUp: false,
  isAuth: false,
  errorMessage: null,
  settingPassword: false,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    ...state,
    signUpEmailAndPass: (userData) =>
      dispatch({ type: actionTypes.SIGN_IN_EMAIL_AND_PASS, payload: userData }),
    signUpSuccess: (newUser) =>
      dispatch({ type: actionTypes.SIGN_UP_SUCCESS, payload: newUser }),
    signUpError: (err) =>
      dispatch({ type: actionTypes.SIGN_UP_ERROR, payload: err }),
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) return null;
  return context;
}

export default AuthContext;
