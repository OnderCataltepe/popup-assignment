import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getApi = createAsyncThunk("form/getApi", async () => {
  const response = await fetch("https://apiv2.popupsmart.com/api/googlefont");
  if (!response.ok) {
    throw new Error("something went wrong!");
  }
  return await response.json();
});

export const formSlice = createSlice({
  name: "form",
  initialState: {
    fonts: [],
    headline: "NEW STUFF",
    description: "Sign up for our newsletter and get 15% off your first order!",
    successMessage: "SUCCESS",
    user: { name: "", email: "", font: "" },
    isSubmitted: false,
  },
  reducers: {
    onChangeInputs: (state, action) => {
      state[action.payload.type] = action.payload.value;
    },
    setIsSubmitted: (state, action) => {
      state.isSubmitted = true;
      state.user = action.payload;
    },
  },
  extraReducers: {
    [getApi.fulfilled]: (state, action) => {
      state.fonts = action.payload;
    },
  },
});

export default formSlice.reducer;
export const { onChangeInputs, setIsSubmitted } = formSlice.actions;
