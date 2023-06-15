import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    infinite_scroll: true,
    pagination: true,
    referal: true,
    help_chat_bot: true,
    ide: true,
    video_calling: true,
};

let CreateDesignReducer4 = createSlice({
    name: "create design step 7 React",
    initialState,
    reducers: {
        updateInfinite_scroll: (state, action) => {
            state.infinite_scroll = action.payload;
        },
        updatePagination: (state, action) => {
            state.pagination = action.payload;
        },
        updateReferal: (state, action) => {
            state.referal = action.payload;
        },
        updateHelp_chat_bot: (state, action) => {
            state.help_chat_bot = action.payload;
        },
        updateIDE: (state, action) => {
            state.ide = action.payload;
        },
        updateVideo_calling: (state, action) => {
            state.video_calling = action.payload;
        },
    }
})

export default CreateDesignReducer4.reducer
export const { updateInfinite_scroll, updatePagination, updateReferal, updateHelp_chat_bot, updateIDE, updateVideo_calling } = CreateDesignReducer4.actions