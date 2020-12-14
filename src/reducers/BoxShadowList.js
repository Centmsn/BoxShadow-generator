import { ADDBOXSHADOW, REMOVEBOXSHADOW } from "../actions/types";

const INITIAL_STATE = ["0 0 4px 4px rgba(0, 0, 0, 0)"];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDBOXSHADOW:
      return [...state, "0 0 4px 4px black"];

    case REMOVEBOXSHADOW:
      const newState = [...state];
      newState.splice(action.payload, 1);

      return newState;

    default:
      return state;
  }
};
