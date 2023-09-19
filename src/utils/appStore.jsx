import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./favSlice";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    fav: favReducer,
    cart: cartReducer,
  },
});

export default appStore;
