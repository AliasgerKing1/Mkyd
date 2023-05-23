import { createSlice } from "@reduxjs/toolkit"

let initialState = [];

let SignInUserReducer = createSlice({
    name: "signin user",
    initialState,
    reducers: {
        getSignInUserRedux(state, action) {
            return [...state, ...action.payload];
        }
    }
})

export default SignInUserReducer.reducer
export const { getSignInUserRedux } = SignInUserReducer.actions