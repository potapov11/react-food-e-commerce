import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice.js';
// import counterReducer from './slices/filterSlice';

export const store = configureStore({
	reducer: {
		filter,
	},
});
