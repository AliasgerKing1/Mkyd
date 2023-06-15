import { createSlice } from "@reduxjs/toolkit"

let initialState =
{
    step_1 : "react"

}

let CreateDesignReducer = createSlice({
    name: "create design react",
    initialState,
    reducers: {
        getCreateDesignRedux(state, action) {
            return action.payload;
        }
    }
})

export default CreateDesignReducer.reducer
export const { getCreateDesignRedux } = CreateDesignReducer.actions