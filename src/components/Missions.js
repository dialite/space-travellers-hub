import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/Missions/missionSlice';
import '../styles/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missionData);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th className="text-white">Empty</th>
        </tr>
      </thead>
      {missions.map((mission) => (
        <tbody key={mission.mission_id}>
          <tr>
            <td className="name">
              {mission.mission_name}
            </td>
            <td className="description">
              {mission.description}
            </td>
            <td className="member">
              Active Member
            </td>
            <td className="join">
              <button className="btn-join" type="button">Join Mission</button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Missions;
