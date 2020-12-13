import { SETBGCOL, SETEXAMPLECOL } from "../actions/types";

const INITIAL_STATE = {
  bg: { r: 255, g: 255, b: 255 },
  example: { r: 175, g: 193, b: 222 },
};

const preview = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETBGCOL:
      return { ...state, bg: action.payload };

    case SETEXAMPLECOL:
      return { ...state, example: action.payload };
    default:
      return state;
  }
};

export default preview;
