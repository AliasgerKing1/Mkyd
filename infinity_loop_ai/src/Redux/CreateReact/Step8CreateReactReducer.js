import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    seo_tool: true,
    analytics_tool: true,
    backend_web_server: true,
    frontend_web_server: true,
    content_writing_tool: true,
};

let CreateDesignReducer4 = createSlice({
    name: "create design step 8 React",
    initialState,
    reducers: {
        updateSeo_tool: (state, action) => {
            state.seo_tool = action.payload;
        },
        updateAnalytics_tool: (state, action) => {
            state.analytics_tool = action.payload;
        },
        updateBackend_web_server: (state, action) => {
            state.backend_web_server = action.payload;
        },
        updateFrontend_web_server: (state, action) => {
            state.frontend_web_server = action.payload;
        },
        updatecContent_writing_tool: (state, action) => {
            state.content_writing_tool = action.payload;
        },
    }
})

export default CreateDesignReducer4.reducer
export const { updateSeo_tool, updateAnalytics_tool, updateBackend_web_server, updateFrontend_web_server, updatecContent_writing_tool } = CreateDesignReducer4.actions