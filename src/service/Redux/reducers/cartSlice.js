import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      const product = action.payload;
      const existProduct = state.find((article) => article.id === product.id);
      if (!existProduct) {
        state.push({ ...product, quantity: 1 });
      } else {
        existProduct.quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter(article => article.id !== productId);
    },
    updateQuantity: (state, action) => {
      const {id, quantity} = action.payload;
      const product = state.find((article) => article.id === id);
      if (product){
        product.quantity = quantity;
      }
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const { addCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;