import { combineReducers } from "@reduxjs/toolkit";
import assetsReducer from "./assets/assetsReducer";
import chartsReducer from "./charts/chartsReducer";
import testReducer from "./test/testReducer";

export const rootReducer = combineReducers({
  test: testReducer,
  assets: assetsReducer,
  charts: chartsReducer,
});

