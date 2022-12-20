import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchMissions from './fetchMissionAPI';

const initialState = { loading: false, missionData: [], error: '' };

export const getMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const missionData = await fetchMissions().then((data) => data);
  const mission = [];
  missionData.forEach((element) => {
    mission.push({
      mission_id: element.mission_id,
      mission_name: element.mission_name,
      description: element.description,
    });
  });
  return mission;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      const newState = { ...state, missionData: action.payload, loading: false };
      return newState;
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      const newState = { ...state, missionData: [], error: action.error.message };
      return newState;
    });
  },
});

export default missionSlice.reducer;
