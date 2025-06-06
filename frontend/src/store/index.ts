import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import productionSlice from './slices/productionSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    production: productionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;