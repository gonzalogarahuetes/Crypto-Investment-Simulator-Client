import { actionTypes } from "../cryptoContext/actionTypes";

export default function reducer(state, action) {
  switch (action.type) {
    case actionTypes.FETCH_CRYPTOS:
      return {
        ...state,
        cryptos: action.payload,
      };

    default:
      break;
  }
}
