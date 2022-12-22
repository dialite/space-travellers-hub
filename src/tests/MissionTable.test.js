import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

it('Mission component should render correctly', () => {
  const mission = render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <Missions />
        </Provider>
      </Router>
    </React.StrictMode>,
  );
  expect(mission).toMatchSnapshot();
});
