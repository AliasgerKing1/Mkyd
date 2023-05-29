import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    error: false
};

let Error404Reducer = createSlice({
    name: "tokens",
    initialState,
    reducers: {
        showError500Redux: (state, action) => {
            state.error = action.payload;
        }
    }
})

export default Error404Reducer.reducer
export const { showError500Redux } = Error404Reducer.actions