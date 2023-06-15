import { createSlice } from "@reduxjs/toolkit"

let initialState =
{
    site_name : ""

}

let viewCreatedSiteReducer = createSlice({
    name: "view site react",
    initialState,
    reducers: {
        viewCreatedSite(state, action) {
            return action.payload;
        }
    }
})

export default viewCreatedSiteReducer.reducer
export const { viewCreatedSite } = viewCreatedSiteReducer.actions