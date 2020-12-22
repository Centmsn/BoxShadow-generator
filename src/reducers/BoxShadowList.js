import _ from "lodash";

import {
  ADDBOXSHADOW,
  REMOVEBOXSHADOW,
  SETOFFSETX,
  SETOFFSETY,
  SETSPREAD,
  SETBLUR,
  SETINSET,
  SETSHADOWCOLOR,
  SETLIST,
} from "../actions/types";

const INITIAL_STATE = {
  0: {
    inset: false,
    x: 0,
    y: 0,
    b: 4,
    s: 4,
    color: { r: 0, g: 0, b: 0, a: 1 },
  },
};

const boxShadowList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDBOXSHADOW:
      return {
        ...state,
        [parseInt(_.findLastKey(state)) + 1]: {
          inset: false,
          x: 0,
          y: 0,
          b: 4,
          s: 4,
          color: { r: 0, g: 0, b: 0, a: 1 },
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

    case SETSPREAD:
      return _.set(
        { ...state },
        `${action.payload.id}.s`,
        action.payload.spread
      );

    case SETBLUR:
      return _.set({ ...state }, `${action.payload.id}.b`, action.payload.blur);

    case SETINSET:
      return _.set(
        { ...state },
        `${action.payload.id}.inset`,
        action.payload.isInset
      );

    case SETSHADOWCOLOR:
      return _.set(
        { ...state },
        `${action.payload.id}.color`,
        action.payload.color
      );

    case SETLIST:
      return { ...action.payload };

    default:
      return state;
  }
};

export default boxShadowList;
