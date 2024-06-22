import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // RTK - either Mutate the existing state or return new state
      // state.items.length = 0; //original state = []
      return { items: [] }; // this new [] will be replaced inside original state = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// vanila (older Redux) => DON'T MUTATE STATE , returning was mendatory
// const newState = [...state]
// newState.items.push(action.payload)
// return  newstate;

// Redux Toolkit
// we have to mutate the state
// it uses immer behind the scenes
