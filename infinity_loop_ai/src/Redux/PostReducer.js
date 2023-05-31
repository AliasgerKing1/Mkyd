import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let postReducer = createSlice({
    name : "user",
    initialState,
    reducers : {
        getPostRedux(state, action) {
return [...state, ...action.payload];
        }
    }
})

export default postReducer.reducer;
export const {getPostRedux} = postReducer.actions;