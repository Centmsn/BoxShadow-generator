import {
  ADDBOXSHADOW,
  REMOVEBOXSHADOW,
  SETOFFSETX,
  SETOFFSETY,
  SETSPREAD,
  SETBLUR,
} from "../actions/types";

const INITIAL_STATE = ["0 0 4px 4px rgba(0, 0, 0, 1)"];

export default (state = INITIAL_STATE, action) => {
  const newState = [...state];

  switch (action.type) {
    case ADDBOXSHADOW:
      return [...state, "0 0 4px 4px rgba(0, 0, 0, 1)"];

    case REMOVEBOXSHADOW:
      newState.splice(action.payload, 1);

      return newState;

    case SETOFFSETX:
      const offsetX = [...state][action.payload.id].split(" ");
      offsetX[0] = `${action.payload.offset}px`;

      newState[action.payload.id] = offsetX.join(" ");
      return newState;

    case SETOFFSETY:
      const offsetY = [...state][action.payload.id].split(" ");
      offsetY[1] = `${action.payload.offset}px`;

      newState[action.payload.id] = offsetY.join(" ");
      return newState;

    case SETSPREAD:
      const spread = [...state][action.payload.id].split(" ");
      spread[2] = `${action.payload.spread}px`;

      newState[action.payload.id] = spread.join(" ");
      return newState;

    case SETBLUR:
      const blur = [...state][action.payload.id].split(" ");
      blur[3] = `${action.payload.blur}px`;

      newState[action.payload.id] = blur.join(" ");
      return newState;

    default:
      return state;
  }
};
