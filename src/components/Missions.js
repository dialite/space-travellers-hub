import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/Missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missionData);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  return (
    <div>
      {missions.map((m) => (
        <div key={m.mission_id}>
          <div>{m.mission_id}</div>
          <div>{m.mission_name}</div>
          <div>{m.description}</div>
        </div>
      ))}
    </div>
  );
};
export default Missions;
