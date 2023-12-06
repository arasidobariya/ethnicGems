import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    info: {},
  },
  reducers: {
    addInfoToReview(state, action) {
      const newItem = action.payload;
      state.info({
        firstName: newItem.firstName,
        lastName: newItem.secondName,
        address: newItem.address,
        city: newItem.city,
        state: newItem.state,
        zip: newItem.zip,
        country: newItem.country,
      });
    },
  },
});

export const infoActions = infoSlice.actions;

export default infoSlice;
