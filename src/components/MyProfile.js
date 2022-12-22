import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/Missions/missionSlice';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missionData);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  const reservedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <section className="my-profile">
      <div className="container">
        <h2>My Missions</h2>
        {reservedMissions.length === 0
          ? <p>No joined missions</p> : (
            <ul>
              {reservedMissions.map((mission) => (
                <li key={mission.mission_id}>{mission.mission_name}</li>
              ))}
            </ul>
          )}
      </div>
      <div className="container">
        <h2>My Rockets</h2>
      </div>
    </section>
  );
};

export default MyProfile;
