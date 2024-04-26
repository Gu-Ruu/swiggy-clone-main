// Import the createSlice function from the @reduxjs/toolkit library
import { createSlice } from "@reduxjs/toolkit";

// Create a slice for managing the cart state
const cartSlice = createSlice({
  // The name of the slice
  name: "cart",
  // The initial state of the cart
  initialState: {
    productsInCart: [],
  },
  // The reducers for the cart slice
  reducers: {
    // The reducer to add a product to the cart
    addToCart: (state, action) => {
      // Mutate the state by pushing the new product into the productsInCart array
      state.productsInCart.push(action.payload); // product
    },
    // The reducer to remove a product from the cart
    removeFromCart(state, action) {
      // Mutate the state by popping the last product from the productsInCart array
      state.productsInCart.pop();
    },
    // The reducer to clear the cart
    clearCart(state, action) {
      // Mutate the state by setting the length of the productsInCart array to 0
      state.productsInCart.length = 0;
    },
  },
});

// Export the actions from the cart slice
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// Export the reducer from the cart slice
export default cartSlice.reducer;
