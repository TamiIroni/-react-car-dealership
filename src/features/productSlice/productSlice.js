import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products:[]
}
const productSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        let itemTo = state.products.find(item => item._id == action.payload._id);
        console.log("product", itemTo);

        if(!itemTo){
            state.products.push({...action.payload,qty:1});
        }
        else itemTo.qty++;
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;