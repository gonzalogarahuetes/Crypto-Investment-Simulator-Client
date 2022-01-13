import { actionTypes } from "./actionTypes";

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SIGN_UP_EMAIL_AND_PASS:
      return {
        ...state,
        isSigningUp: true,
        errorMessage: null,
      };
    case actionTypes.SIGN_UP_WITH_GOOGLE:
      return {
        ...state,
        isSigningUp: true,
        errorMessage: null,
      };
    case actionTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        isAuth: true,
        user: action.payload,
      };
    }
    case actionTypes.SIGN_IN_EMAIL_AND_PASS: {
      return {
        ...state,
        isSigningIn: true,
        errorMessage: false,
      };
    }
    case actionTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        isSigningIn: false,
        isAuth: true,
        user: action.payload,
      };
    }
    case actionTypes.AUTH_ERROR: {
      return {
        ...state,
        isSigningIn: false,
        isSigningUp: false,
        user: null,
        errorMessage: action.payload,
      };
    }
    default:
      break;
  }
}
