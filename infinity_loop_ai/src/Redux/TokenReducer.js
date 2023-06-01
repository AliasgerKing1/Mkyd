import { createSlice } from "@reduxjs/toolkit"

let initialState = [];

let TokenReducer = createSlice({
    name: "tokens",
    initialState,
    reducers: {
        getTokenRedux(state, action) {
            return action.payload;
        }
    }
})

export default TokenReducer.reducer
export const { getTokenRedux } = TokenReducer.actions