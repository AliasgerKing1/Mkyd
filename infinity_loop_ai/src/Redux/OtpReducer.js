import { createSlice } from "@reduxjs/toolkit"

let initialState = [];

let OtpnReducer = createSlice({
    name: "tokens",
    initialState,
    reducers: {
        OtpRedux(state, action) {
            return action.payload;
        }
    }
})

export default OtpnReducer.reducer
export const { OtpRedux } = OtpnReducer.actions