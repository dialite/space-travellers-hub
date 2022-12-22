import React from 'react';
import { Provider } from 'react-redux';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';

const rockets = [{
  id: 1,
  rocket_name: 'test rocket',
  description: 'test description',
  flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
}];

let spyFunc;
beforeEach(() => {
  spyFunc = jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(rockets),
  });
  render(
    <Router>
      <Provider store={store}>
        <Rockets />
      </Provider>
    </Router>,
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Testing rocket reservation', () => {
  test('Test to reserve rocket', async () => {
    expect(spyFunc).toBeCalled();
    const reservedButton = screen.getByTestId('btn-1');
    act(() => fireEvent.click(reservedButton));
    await waitFor(() => expect(reservedButton.textContent).toBe('Cancel Reservation'));
  });
  test('Test to cancel rocket reservation', async () => {
    const switchReservation = screen.getByTestId('btn-1');
    act(() => fireEvent.click(switchReservation));
    await waitFor(() => expect(switchReservation.textContent).toBe('Reserve Rocket'));
  });
});
