import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "./../data";

interface Product extends ProductData {
  count: number;
}

interface Cart {
  products: Record<string, Product>;
  totalItems: number;
}

const initialState: Cart = {
  products: {},
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addedProduct: (cart, { payload }: PayloadAction<Product>) => {
      const { products } = cart;
      if (Object.keys(products).includes(payload.id)) {
        products[payload.id].count += payload.count;
      } else {
        products[payload.id] = payload;
      }
      updateTotals(cart);
    },
    deletedProduct: (cart, action: PayloadAction<string>) => {
      delete cart.products[action.payload];
      updateTotals(cart);
    },
  },
});

export const { addedProduct, deletedProduct } = cartSlice.actions;

export default cartSlice.reducer;

const updateTotals = (cart: Cart) => {
  const items = Object.values(cart.products);
  if (items.length > 0) {
    cart.totalItems = items.reduce((total, product) => {
      total += product.count;
      return total;
    }, 0);
  } else {
    cart.totalItems = 0;
  }
  console.log(items);
};
