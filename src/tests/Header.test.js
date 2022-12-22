import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Header from '../components/Header';

it('Header component should render correctly', () => {
  const header = render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    </React.StrictMode>,
  );
  expect(header).toMatchSnapshot();
});
