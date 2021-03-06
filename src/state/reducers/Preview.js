import { actionType } from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  bg: { r: 255, g: 255, b: 255 },
  example: { r: 175, g: 193, b: 222 },
  radius: 0,
};

const preview = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.SETBGCOL:
      if (action.payload) {
        return _.set(
          { ...state },
          `bg.${action.payload.prop}`,
          action.payload.value
        );
      }
      return { ...state, bg: { r: 255, g: 255, b: 255 } };

    case actionType.SETEXAMPLECOL:
      if (action.payload) {
        const newState = _.set(
          { ...state },
          `example.${action.payload.prop}`,
          action.payload.value
        );

        return newState;
      }
      return { ...state, example: { r: 175, g: 193, b: 222 } };

    case actionType.SETEXAMPLERADIUS:
      return { ...state, radius: action.payload };

    default:
      return state;
  }
};

export default preview;
