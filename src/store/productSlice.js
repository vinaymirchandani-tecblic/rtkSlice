import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

// console.log("cartSlice --> ", cartSlice);

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProduct() {
  return async function fetchProductThunk(disptach, getState) {
    disptach(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      disptach(setProducts(data));
      disptach(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      disptach(setStatus(STATUSES.ERROR));
    }
  };
}
