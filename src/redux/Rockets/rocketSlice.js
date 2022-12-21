import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchRocket from './fetchRocketAPI';

const initialState = { loading: false, rocketData: [], error: '' };

export const getRocket = createAsyncThunk('rockets/fetchRockets', async () => {
  const rocketData = await fetchRocket().then((data) => data);
  const rocket = [];
  rocketData.forEach((element) => {
    rocket.push({
      rocket_id: element.id,
      rocket_name: element.rocket_name,
      description: element.description,
      images: element.flickr_images,
    });
  });
  return rocket;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRocket.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(getRocket.fulfilled, (state, action) => {
      const newState = { ...state, rocketData: action.payload, loading: false };
      return newState;
    });
    builder.addCase(getRocket.rejected, (state, action) => {
      const newState = { ...state, rocketData: [], error: action.error.message };
      return newState;
    });
  },
});

export default rocketSlice.reducer;
