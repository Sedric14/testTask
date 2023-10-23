import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from './slices/counter.slice';
import urlReducer from './slices/urlSlice';

export const store = configureStore({
  reducer: {
    url: urlReducer,
    // counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
