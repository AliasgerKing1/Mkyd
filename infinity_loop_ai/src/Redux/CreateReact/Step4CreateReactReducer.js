import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    tone: 1,
    language: 1,
};

let CreateDesignReducer4 = createSlice({
    name: "create design step 4",
    initialState,
    reducers: {
        updateTone: (state, action) => {
            state.tone = action.payload;
        },
        updateLanguage: (state, action) => {
            state.language = action.payload;
        },
    }
})

export default CreateDesignReducer4.reducer
export const { updateTone, updateLanguage } = CreateDesignReducer4.actions