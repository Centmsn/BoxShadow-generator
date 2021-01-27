import { actionType } from "../actions/types";

const INITIAL_STATE = 0;

const ActiveId = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.CHANGEACTIVEID:
      return action.payload;
    default:
      return state;
  }
};

export default ActiveId;
