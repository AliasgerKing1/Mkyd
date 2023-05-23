import { createSlice } from "@reduxjs/toolkit"

let initialState = [];

let getTokenReducer = createSlice({
    name: "tokens",
    initialState,
    reducers: {
        getTokenRedux(state, action) {
            return action.payload;
        }
    }
})

export default getTokenReducer.reducer
export const { getTokenRedux } = getTokenReducer.actions