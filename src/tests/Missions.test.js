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
import App from '../App';

const missions = [{
  mission_id: 1,
  mission_name: 'test rocket',
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

describe('Testing mission component', () => {
  // it('Mission component should render correctly', () => {
  //   const mission = render(
  //     <React.StrictMode>
  //       <Router>
  //         <Provider store={store}>
  //           <Missions />
  //         </Provider>
  //       </Router>
  //     </React.StrictMode>,
  //   );
  //   expect(mission).toMatchSnapshot();
  // });
  test('reserve a mission', async () => {
    expect(spyFunc).toBeCalled();
    const reservedBtn = screen.getByTestId('btn-1');
    act(() => fireEvent.click(reservedBtn));
    await waitFor(() => expect(reservedBtn.textContent).toBe('Leave Mission'));
  });
});
