import { createSlice } from "@reduxjs/toolkit"

let initialState =
{
    step_1 : "html"

};

let CreateDesignReducer = createSlice({
    name: "create design",
    initialState,
    reducers: {
        getCreateDesignRedux(state, action) {
            return action.payload;
        }
    }
})

export default CreateDesignReducer.reducer
export const { getCreateDesignRedux } = CreateDesignReducer.actions