export const selectCartModule = (state) => state.cart;

export const selectProductAmount = (state, id) => selectCartModule(state).counters[id] || 0;

export const selectTotalAmount = (state) => state.cart.total;