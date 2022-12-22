import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import MyProfile from '../components/MyProfile';

it('My profile component should render correctly', () => {
  const myProfile = render(
    <Router>
      <Provider store={store}>
        <MyProfile />
      </Provider>
    </Router>,
  );
  expect(myProfile).toMatchSnapshot();
});
