import { SETBGCOL, SETEXAMPLECOL } from "./types";

export const setBgCol = (r, g, b) => {
  return {
    type: SETBGCOL,
    payload: { r, g, b },
  };
};

export const setBoxCol = (r, g, b) => {
  return {
    type: SETEXAMPLECOL,
    payload: { r, g, b },
  };
};
