import { ActionTypes } from "./types";

export const activatePayUp = (payload) => {
  return {
    type: ActionTypes.ACTIVATE_PAY_UP,
    payload,
  };
};
