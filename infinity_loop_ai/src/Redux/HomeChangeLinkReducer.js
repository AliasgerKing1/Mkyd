import { createSlice } from "@reduxjs/toolkit"

let initialState = 1;

let HomeChangeLinkReducer = createSlice({
    name: "home change link",
    initialState,
    reducers: {
        HomeChangeLinkRedux(state, action) {
            return action.payload;
        }
    }
})

export default HomeChangeLinkReducer.reducer
export const { HomeChangeLinkRedux } = HomeChangeLinkReducer.actions