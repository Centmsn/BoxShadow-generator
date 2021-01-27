import { combineReducers } from "redux";

import preview from "./Preview";
import boxShadowList from "./BoxShadowList";
import activeId from "./ActiveId";

const reducers = combineReducers({
  boxShadowList,
  preview,
  activeId,
});

export default reducers;
