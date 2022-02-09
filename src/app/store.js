import { configureStore } from '@reduxjs/toolkit';
import locationServiceReducer from '../features/locationServiceSlice';

export default configureStore({
  reducer: {
    locationService: locationServiceReducer
  }
})