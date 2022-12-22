import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocket, updateRocket } from '../redux/Rockets/rocketSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rocketData);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocket());
    }
  }, [dispatch, rockets.length]);

  const handleClick = (id) => {
    dispatch(updateRocket(id));
  };

  return (
    <table className="frame">
      {rockets.map((rocket) => (
        <tbody key={rocket.rocket_id}>
          <tr className="table-list">
            <td className="image">
              <div className="image-container">
                <img src={rocket.images} alt={rocket.rocket_name} />
              </div>
            </td>
            <td className="description">
              <div>{rocket.rocket_name}</div>
              {rocket.reserved ? <span className="rocket-reserved">Reserved</span> : null}
              {rocket.description}
              <br />
              <button
                className={`${rocket.reserved ? 'btn-leave' : 'btn-join'} ${'btn'}`}
                type="button"
                onClick={() => handleClick(rocket.rocket_id)}
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Rockets;
