import { createSlice } from "@reduxjs/toolkit";

const timingDetailsInitialState = { timing: {} };

const timingDetailsSlice = createSlice({
  name: "cars",
  initialState: timingDetailsInitialState,
  reducers: {
    sendTiming(state, actions) {
      state.timing = actions.payload;
    },
  },
});

export const timingdetailsAction = timingDetailsSlice.actions;
export default timingDetailsSlice;
