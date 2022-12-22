import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/missionSlice';
import rocketReducer from './Rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer,
  },
});

export default store;
