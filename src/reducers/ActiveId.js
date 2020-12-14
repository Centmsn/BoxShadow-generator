import { CHANGEACTIVEID } from "../actions/types";

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGEACTIVEID:
      return action.payload;
    default:
      return state;
  }
};
