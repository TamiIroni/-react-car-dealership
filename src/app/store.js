import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice/productSlice";



export  const myStore= configureStore({
  reducer: {
    products: productSlice,
  },
});

export default myStore;

