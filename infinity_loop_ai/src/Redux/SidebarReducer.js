import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    stateVar: false,
    condition: false
};

let SidebarReducer = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        getSidebarRedux: (state, action) => {
            state.stateVar = action.payload;
        },
        getSidebarConditionRedux: (state, action) => {
            state.condition = action.payload;
        },
    }
})

export default SidebarReducer.reducer
export const { getSidebarRedux, getSidebarConditionRedux } = SidebarReducer.actions