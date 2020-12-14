import _ from "lodash";

import {
  ADDBOXSHADOW,
  REMOVEBOXSHADOW,
  SETOFFSETX,
  SETOFFSETY,
  SETSPREAD,
  SETBLUR,
} from "../actions/types";

const INITIAL_STATE = { 0: { x: 0, y: 0, s: 4, b: 4, c: "rgba(0, 0, 0, 1)" } };

export default (state = INITIAL_STATE, action) => {
  // const newState = [...state];

  switch (action.type) {
    case ADDBOXSHADOW:
      const keys = Object.keys(state);
      console.log();
      return {
        ...state,
        [parseInt(_.findLastKey(state)) + 1]: {
          x: 0,
          y: 0,
          s: 4,
          b: 4,
          c: "rgba(0, 0, 0, 1)",
        },
      };

    case REMOVEBOXSHADOW:
      return _.omit({ ...state }, action.payload);

    case SETOFFSETX:
      return _.set(
        { ...state },
        `${action.payload.id}.x`,
        action.payload.offset
      );

    case SETOFFSETY:
      return _.set(
        { ...state },
        `${action.payload.id}.y`,
        action.payload.offset
      );

    // case SETSPREAD:
    //   const spread = [...state][action.payload.id].split(" ");
    //   spread[2] = `${action.payload.spread}px`;

    //   newState[action.payload.id] = spread.join(" ");
    //   return newState;

    // case SETBLUR:
    //   const blur = [...state][action.payload.id].split(" ");
    //   blur[3] = `${action.payload.blur}px`;

    //   newState[action.payload.id] = blur.join(" ");
    //   return newState;

    default:
      return state;
  }
};
