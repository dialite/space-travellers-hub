import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchMissions from './fetchMissionAPI';

const initialState = { loading: false, missionData: [], error: '' };

export const getMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const missionData = await fetchMissions().then((data) => data);
  const missions = [];
  missionData.forEach((element) => {
    missions.push({
      mission_id: element.mission_id,
      mission_name: element.mission_name,
      description: element.description,
    });
  });
  return missions;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    updateMission: (state, action) => {
      state.missionData.map((mission) => {
        const updatedMission = mission;
        if (updatedMission.mission_id === action.payload.id) {
          if (action.payload.newState === 'join') {
            updatedMission.reserved = true;
          } else {
            updatedMission.reserved = false;
          }
        }
        return updatedMission;
      });
    },
  },
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
export const { updateMission } = missionSlice.actions;
