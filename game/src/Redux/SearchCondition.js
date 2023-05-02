import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let searchReducer = createSlice({
    name : "search",
    initialState,
    reducers : {
        getSearchConditionRedux(state, action) {
            return action.payload;
                    }
    }
})

export default searchReducer.reducer;
export const {getSearchConditionRedux} = searchReducer.actions;