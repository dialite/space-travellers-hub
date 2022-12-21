import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, updateMission } from '../redux/Missions/missionSlice';
import '../styles/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missionData);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  const handleClick = (id) => {
    dispatch(updateMission(id));
  };

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
              <span className={mission.reserved ? 'active-member' : 'not-member'}>
                {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
              </span>
            </td>
            <td className="join">
              <button
                className={`${mission.reserved ? 'btn-leave' : 'btn-join'} ${'btn'}`}
                type="button"
                onClick={() => handleClick(mission.mission_id)}
              >
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default Missions;
