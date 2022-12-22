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

  const handleClick = (id, reserved) => {
    dispatch(updateRocket({ id, newState: reserved ? ' ' : 'link' }));
  };

  return (
    <div className="frame">
      {rockets.map((rocket) => (
        <div key={rocket.rocket_id}>
          <div className="rocket-container">
            <div className="image-container">
              <img src={rocket.images} alt={rocket.rocket_name} />
            </div>
            <div className="rocket-details">
              <h2 className="rocket-title">{rocket.rocket_name}</h2>
              <p className="rockets-description">
                {rocket.reserved && (
                <span className="rocket-badge">
                  Reserved
                </span>
                )}
                {' '}
                {rocket.description}
              </p>
              <br />
              {!rocket.reserved ? (
                <button type="button" className="rocket-reserve-btn" onClick={() => handleClick(rocket.rocket_id, rocket.reserved)}>Reserve Rocket</button>
              ) : (
                <button type="button" className="rocket-cancel-btn" onClick={() => handleClick(rocket.rocket_id, rocket.reserved)}>Cancel Reservation</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
