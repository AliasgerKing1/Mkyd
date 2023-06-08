import { createSlice } from "@reduxjs/toolkit"

let initialState = [];

let CreateDesignReducer3 = createSlice({
    name: "create design step 3",
    initialState,
    reducers: {
        updatePaletteRedux(state, action) {
            return action.payload;
        }
    }
})

export default CreateDesignReducer3.reducer
export const { updatePaletteRedux } = CreateDesignReducer3.actions