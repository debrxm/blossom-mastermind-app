import { ActionTypes } from "./types";
const INITIAL_STATE = {
  payUp: false,
};

const PayUp = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ACTIVATE_PAY_UP:
      return {
        ...state,
        payUp: action.payload,
      };
    default:
      return state;
  }
};

export default PayUp;
