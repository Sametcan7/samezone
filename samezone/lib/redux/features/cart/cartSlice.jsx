import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const product = action.payload;

      const existingProduct = state.find(
        (product) => product.id === action.payload.id,
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.push({
          ...product,
          quantity: 1,
        });
      }
    },
    deleteProduct(state, action) {
      const product = state.find(
        (product) => product.id === action.payload.product,
      );
      if (product.quantity === 1) {
        return state.filter((products) => products.id !== action.payload.product);
      }
      product.quantity--;
    },
    addByQuantity(state, action) {
      const product = state.find(
        (product) => product.id === action.payload.product,
      );
      product.quantity = action.payload.quantity;
    },
    removeProduct(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
  },
  selectors: { selectAllCart: (state) => state },
});

// Action creators are generated for each case reducer function
export const { addProduct, addByQuantity, removeProduct, deleteProduct } =
  cartSlice.actions;
export const { selectAllCart } = cartSlice.selectors;

export default cartSlice.reducer;
