import { combineReducers } from "redux";

import preview from "./Preview";
import boxShadowList from "./BoxShadowList";

const reducers = combineReducers({
  boxShadowList,
  preview,
});

export default reducers;
