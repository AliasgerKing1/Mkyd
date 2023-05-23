import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page_number: 1,
  website_name: ""
};

const CreateDesignReducer2 = createSlice({
  name: "create design step 2",
  initialState,
  reducers: {
    updatePageNumber: (state, action) => {
      state.page_number = action.payload;
    },
    updateWebsiteName: (state, action) => {
      state.website_name = action.payload;
    }
  }
});

export default CreateDesignReducer2.reducer;
export const { updatePageNumber, updateWebsiteName } = CreateDesignReducer2.actions;
