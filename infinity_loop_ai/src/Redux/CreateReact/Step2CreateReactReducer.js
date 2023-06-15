import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page_number: 1,
  website_name: "",
  category: "select",
  logo_name : ""
};

const CreateDesignReducer2 = createSlice({
  name: "create design step 2 React",
  initialState,
  reducers: {
    updatePageNumber: (state, action) => {
      state.page_number = action.payload;
    },
    updateWebsiteName: (state, action) => {
      state.website_name = action.payload;
    },
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
    updateLogo_name: (state, action) => {
      state.logo_name = action.payload;
    },
  }
});

export default CreateDesignReducer2.reducer;
export const { updatePageNumber, updateWebsiteName, updateCategory, updateLogo_name } = CreateDesignReducer2.actions;
