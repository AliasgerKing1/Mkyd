import {configureStore, combineReducers} from "@reduxjs/toolkit";
let rootReducer = combineReducers({

})
let store = configureStore ({
  reducer : rootReducer
})