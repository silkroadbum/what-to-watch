import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReduces } from './roor-reducer';

const api = createAPI();

export const store = configureStore({
  reducer: rootReduces,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

