import { actionType } from "../actions/types";

const INITIAL_STATE = {
  bg: { r: 255, g: 255, b: 255 },
  example: { r: 175, g: 193, b: 222 },
  radius: 0,
};

const preview = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.SETBGCOL:
      return { ...state, bg: action.payload };

    case actionType.SETEXAMPLECOL:
      return { ...state, example: action.payload };

    case actionType.SETEXAMPLERADIUS:
      return { ...state, radius: action.payload };

    default:
      return state;
  }
};

export default preview;
