import React from 'react';
import { Provider } from 'react-redux';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

const missions = [{
  mission_id: 1,
  mission_name: 'test mission',
  description: 'test description',
}];

let spyFunc;
beforeEach(() => {
  spyFunc = jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(missions),
  });
  render(
    <Router>
      <Provider store={store}>
        <Missions />
      </Provider>
    </Router>,
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Testing mission reservation', () => {
  test('Test for join mission', async () => {
    expect(spyFunc).toBeCalled();
    const reservedBtn = screen.getByTestId('btn-1');
    act(() => fireEvent.click(reservedBtn));
    await waitFor(() => expect(reservedBtn.textContent).toBe('Leave Mission'));
  });
  test('Test for leave mission', async () => {
    const toggleReservation = screen.getByTestId('btn-1');
    act(() => fireEvent.click(toggleReservation));
    await waitFor(() => expect(toggleReservation.textContent).toBe('Join Mission'));
  });
});
