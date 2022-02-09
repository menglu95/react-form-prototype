import { createSlice } from '@reduxjs/toolkit';

export const locationServiceSlice = createSlice({
  name: 'locationService',
  initialState: {
    location: 'India',
    services: []
  },
  reducers: {
    locationUpdate: (state, action) => {
      state.location = action.payload;
    },
    servicesUpdate: (state, action) => {
      const index = state.services.indexOf(action.payload);
      if (index != -1) {
        state.services = [...state.services.slice(0, index), ...state.services.slice(index + 1)];
      } else {
        state.services = [...state.services, action.payload];
      }
      console.log('services', state.services);
    }
  }
});

export const { locationUpdate, servicesUpdate } = locationServiceSlice.actions;

export default locationServiceSlice.reducer;