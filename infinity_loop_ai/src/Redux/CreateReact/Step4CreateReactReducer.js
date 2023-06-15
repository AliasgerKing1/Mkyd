import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    tone: "professional",
    language: "English (US)",
};

let CreateDesignReducer4 = createSlice({
    name: "create design step 4 React",
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