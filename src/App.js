import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Stepper from "./components/Steeper";
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom'
import PersonalInfo from './pages/PersonalInfo';
import AddressDetails from './pages/AddressDetails';
import Preferences from './pages/Preferences';
import ReviewSubmit from './pages/ReviewSubmit';
function App() {
  return (
    <div className="container mx-auto">
      <Layout>
        <Stepper />
        <Routes>
          {
            <Route
              path='/page/personal-Info'
              element={<PersonalInfo />}
            />
          }
          <Route
            path='/page/address-details'
            element={<AddressDetails />}
          />
          <Route
            path='/page/preferences'
            element={<Preferences />}
          />
          <Route
            path='/page/Review&Submit'
            element={<ReviewSubmit />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
