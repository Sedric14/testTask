import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UrlState {
  url: string;
}

export const initialState: UrlState = {
  url: '',
};

const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    removeUrl() {
      return initialState;
    },
    setUrl(state, action: PayloadAction<UrlState>) {
      return { ...action.payload };
    },
  },
});

export const { setUrl, removeUrl } = urlSlice.actions;
export default urlSlice.reducer;
