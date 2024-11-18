import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employee';

// Configure store
const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
