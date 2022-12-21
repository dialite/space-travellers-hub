import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocket } from '../redux/Rockets/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rocketData);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocket());
    }
  }, [dispatch, rockets.length]);

  return (
    <div>
      {rockets.map((m) => (
        <div key={m.rocket_id}>
          <div>{m.rocket_id}</div>
          <div>{m.rocket_name}</div>
          <div>{m.description}</div>
          <div>{m.images}</div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
