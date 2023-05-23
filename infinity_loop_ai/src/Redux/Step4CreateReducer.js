import { createSlice } from "@reduxjs/toolkit"

let initialState = [];

let CreateDesignReducer4 = createSlice({
    name: "create design step 4",
    initialState,
    reducers: {
        getCreateDesignstep4Redux(state, action) {
            return action.payload;
        }
    }
})

export default CreateDesignReducer4.reducer
export const { getCreateDesignstep4Redux } = CreateDesignReducer4.actions