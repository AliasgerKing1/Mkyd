import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    authentication: true,
    routing: true,
    otp: true,
    redux: true,
};

let CreateDesignReducer4 = createSlice({
    name: "create design step 6 React",
    initialState,
    reducers: {
        updateAuthentication: (state, action) => {
            state.authentication = action.payload;
        },
        updateRouting: (state, action) => {
            state.routing = action.payload;
        },
        updateOtp: (state, action) => {
            state.otp = action.payload;
        },
        updateRedux: (state, action) => {
            state.redux = action.payload;
        },
    }
})

export default CreateDesignReducer4.reducer
export const { updateAuthentication, updateRouting, updateOtp, updateRedux } = CreateDesignReducer4.actions