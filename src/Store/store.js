import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import infoSlice from "./infoSlice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, info: infoSlice.reducer },
});

export default store;
