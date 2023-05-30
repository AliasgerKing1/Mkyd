import { createSlice } from "@reduxjs/toolkit"

let initialState = "";

let PlanSelectedReducer = createSlice({
    name: "plan",
    initialState,
    reducers: {
        PlanSelectedRedux(state, action) {
            return action.payload;
        }
    }
})

export default PlanSelectedReducer.reducer
export const { PlanSelectedRedux } = PlanSelectedReducer.actions