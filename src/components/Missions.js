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

  const handleClick = (id, reserved) => {
    dispatch(updateMission({ id, newState: reserved ? 'leave' : 'join' }));
  };

  return (
    <table className="mission-table" data-testid="mission-list">
      <thead>
        <tr>
          <th className="mission-table-head">Mission</th>
          <th className="mission-table-head">Description</th>
          <th className="mission-table-head">Status</th>
          <th className="mission-table-head"> </th>
        </tr>
      </thead>
      {missions.map((mission) => (
        <tbody key={mission.mission_id}>
          <tr>
            <td className="name mission-table-data">
              {mission.mission_name}
            </td>
            <td className="description mission-table-data">
              {mission.description}
            </td>
            <td className="member mission-table-data">
              <span className={mission.reserved ? 'active-member' : 'not-member'}>
                {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
              </span>
            </td>
            <td className="join mission-table-data">
              <button
                className={`${mission.reserved ? 'btn-leave' : 'btn-join'} ${'btn'}`}
                type="button"
                onClick={() => handleClick(mission.mission_id, mission.reserved)}
                data-testid={`btn-${mission.mission_id}`}
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
