import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchRocket from './fetchRocketAPI';

const initialState = { loading: false, rocketData: [], error: '' };

export const getRocket = createAsyncThunk('rockets/fetchRockets', async () => {
  const rocketData = await fetchRocket().then((data) => data);
  const rockets = [];
  rocketData.forEach((element) => {
    rockets.push({
      rocket_id: element.id,
      rocket_name: element.rocket_name,
      description: element.description,
      images: element.flickr_images,
    });
  });
  return rockets;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    updateRocket: (state, action) => {
      const updatedRocket = state.rocketData.find((rocket) => (
        rocket.rocket_id === action.payload
      ));
      updatedRocket.reserved = !updatedRocket.reserved;
    },
  },
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
export const { updateRocket } = rocketSlice.actions;
