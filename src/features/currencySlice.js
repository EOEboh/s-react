import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: '$'
  },
  reducers: {
    setCurrency: (state, action) => 
      void (state.currency = action.payload)
      // return {...state, currency: action.payload}
    
  }
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
