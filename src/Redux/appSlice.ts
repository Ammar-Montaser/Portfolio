import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type initialStateType = {
  loading: boolean;
  isMobileMenuOpen: boolean;
  mode: string;
  color: string;
  language: string;
  compliment: string;
  error: string;
};

const initialState: initialStateType = {
  loading: true,
  isMobileMenuOpen: false,
  mode: "dark",
  color: "rgba(31,233,4,0.478)",
  language: "ltr",
  compliment: "",
  error: "",
};

export const loadCompliment = createAsyncThunk(
  "appSlice/loadCompliment",
  async () => {
    return await axios
      .get("https://portfolio-server-cztg.onrender.com/advice")
      .then((response): string => {
        return response.data;
      });
  }
);

const appSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = false;
    },
    toogleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    changeMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadCompliment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadCompliment.fulfilled, (state, action) => {
      state.compliment = action.payload;
      state.error = "";
    });
    builder.addCase(loadCompliment.rejected, (state, action) => {
      state.error = action.error.message || "Something Went Wrong!";
      state.compliment = "";
    });
  },
});
export default appSlice.reducer;
export const appSliceActions = appSlice.actions;
