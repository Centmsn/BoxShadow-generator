import { actionType } from "./types";

export const setBgCol = (r, g, b) => {
  return {
    type: actionType.SETBGCOL,
    payload: { r, g, b },
  };
};

export const setBoxCol = (r, g, b) => {
  return {
    type: actionType.SETEXAMPLECOL,
    payload: { r, g, b },
  };
};

export const setBoxRadius = (radius) => {
  return {
    type: actionType.SETEXAMPLERADIUS,
    payload: radius,
  };
};

export const addBoxShadow = () => {
  return {
    type: actionType.ADDBOXSHADOW,
  };
};

export const removeBoxShadow = (id) => {
  return {
    type: actionType.REMOVEBOXSHADOW,
    payload: id,
  };
};

export const changeActiveId = (id) => {
  return {
    type: actionType.CHANGEACTIVEID,
    payload: id,
  };
};

export const setOffsetX = (offset, id) => {
  return {
    type: actionType.SETOFFSETX,
    payload: { offset, id },
  };
};

export const setOffsetY = (offset, id) => {
  return {
    type: actionType.SETOFFSETY,
    payload: { offset, id },
  };
};

export const setSpread = (spread, id) => {
  return {
    type: actionType.SETSPREAD,
    payload: { spread, id },
  };
};

export const setBlur = (blur, id) => {
  return {
    type: actionType.SETBLUR,
    payload: { blur, id },
  };
};

export const setInset = (isInset, id) => {
  return {
    type: actionType.SETINSET,
    payload: { id, isInset },
  };
};

export const setShadowColor = (color, id) => {
  return {
    type: actionType.SETSHADOWCOLOR,
    payload: { id, color },
  };
};

export const setList = (list) => {
  return {
    type: actionType.SETLIST,
    payload: list,
  };
};
