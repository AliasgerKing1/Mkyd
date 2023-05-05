
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

const followerReducer = createSlice({
    name : "fetch follower user",
    initialState,
    reducers : {
        getfollowerRedux(state, action) {
return action.payload;
        }
    }
});

export const { getFollowerRedux } = followerReducer.actions;

export default followerReducer.reducer;


