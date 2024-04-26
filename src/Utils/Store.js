import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // here we can add more slices if  needed for other features of the application
  },
});

export default appStore;
