import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  counters: {}
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const count = state.counters[payload] || 0;
      state.counters[payload] = count + 1;
      state.total += 1;
    },
    decrement: (state, { payload }) => {
      const count = state.counters[payload];

      if (!count) {
        return;
      }

      state.total -= 1;

      if (count === 1) {
        delete state.counters[payload];
        return;
      }

      state.counters[payload] = count - 1;
    },
    reset: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
