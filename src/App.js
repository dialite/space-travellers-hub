import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/myprofile"
          element={(
            <MyProfile />
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
