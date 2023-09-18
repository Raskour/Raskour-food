import { createSlice } from "@reduxjs/toolkit";

const favItems = createSlice({
  name: "fav",
  initialState: {
    items: [],
  },

  reducers: {
    addFav: (state, action) => {
      state.items.push(action.payload);
    },
    removeFav: (state, action) => {
      const itemId = action.payload;

      // remove this particular item with given id from the cart items present in the store
      return {
        ...state,
        items: state.items.filter((item) => item.id != itemId),
      };
    },
    clearFav: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addFav, removeFav, clearFav } = favItems.actions;

export default favItems.reducer;
