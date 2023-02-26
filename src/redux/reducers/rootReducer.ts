import { combineReducers } from "@reduxjs/toolkit";
import testReducer from "./test/testReducer";

export const rootReducer = combineReducers({
    test: testReducer
})


export type AppState = ReturnType<typeof rootReducer>;
