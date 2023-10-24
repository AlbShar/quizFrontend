import { configureStore } from '@reduxjs/toolkit';
import { userAnswersReducer } from 'modules/UserAnswers';

export const store = configureStore({
  reducer: userAnswersReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;