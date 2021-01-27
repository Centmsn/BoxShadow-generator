import {
  SETBGCOL,
  SETEXAMPLECOL,
  SETEXAMPLERADIUS,
  ADDBOXSHADOW,
  REMOVEBOXSHADOW,
  CHANGEACTIVEID,
  SETOFFSETX,
  SETOFFSETY,
  SETSPREAD,
  SETBLUR,
  SETINSET,
  SETSHADOWCOLOR,
  SETLIST,
} from "./types";

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

export const setBoxRadius = (radius) => {
  return {
    type: SETEXAMPLERADIUS,
    payload: radius,
  };
};

export const addBoxShadow = () => {
  return {
    type: ADDBOXSHADOW,
  };
};

export const removeBoxShadow = (id) => {
  return {
    type: REMOVEBOXSHADOW,
    payload: id,
  };
};

export const changeActiveId = (id) => {
  return {
    type: CHANGEACTIVEID,
    payload: id,
  };
};

export const setOffsetX = (offset, id) => {
  return {
    type: SETOFFSETX,
    payload: { offset, id },
  };
};

export const setOffsetY = (offset, id) => {
  return {
    type: SETOFFSETY,
    payload: { offset, id },
  };
};

export const setSpread = (spread, id) => {
  return {
    type: SETSPREAD,
    payload: { spread, id },
  };
};

export const setBlur = (blur, id) => {
  return {
    type: SETBLUR,
    payload: { blur, id },
  };
};

export const setInset = (isInset, id) => {
  return {
    type: SETINSET,
    payload: { id, isInset },
  };
};

export const setShadowColor = (color, id) => {
  return {
    type: SETSHADOWCOLOR,
    payload: { id, color },
  };
};

export const setList = (list) => {
  return {
    type: SETLIST,
    payload: list,
  };
};
