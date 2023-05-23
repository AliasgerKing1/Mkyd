import { createSlice } from "@reduxjs/toolkit"

let initialState = [];

let CreateDesignReducer3 = createSlice({
    name: "create design step 3",
    initialState,
    reducers: {
        getCreateDesignstep3Redux(state, action) {
            return action.payload;
        }
    }
})

export default CreateDesignReducer3.reducer
export const { getCreateDesignstep3Redux } = CreateDesignReducer3.actions