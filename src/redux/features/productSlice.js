import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (productId) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const data = await response.json()
    return data
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState: {
    item: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.item = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;