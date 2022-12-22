import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/Missions/missionSlice';
import { getRocket } from '../redux/Rockets/rocketSlice';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missionData);
  const rockets = useSelector((state) => state.rockets.rocketData);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocket());
    }
  }, [dispatch, rockets.length]);

  const reservedMissions = missions.filter((mission) => mission.reserved === true);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

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
        {reservedRockets.length === 0
          ? <p>No reserved rockets</p> : (
            <ul>
              {reservedRockets.map((rocket) => (
                <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
              ))}
            </ul>
          )}
      </div>
    </section>
  );
};

export default MyProfile;
