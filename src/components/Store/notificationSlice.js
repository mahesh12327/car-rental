import { createSlice } from "@reduxjs/toolkit";

const notificationInitialState = {
  status: "",
  message: "",
};
const notificationSlice = createSlice({
  name: "notification",
  initialState: notificationInitialState,
  reducers: {
    showNotification(state, actions) {
      state.status = actions.payload.status;
      state.message = actions.payload.message;
    },
  },
});
export const notificationAction = notificationSlice.actions;
export default notificationSlice;
