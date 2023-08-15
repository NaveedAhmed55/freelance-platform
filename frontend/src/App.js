import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change 'BrowserRouter' to 'Router'
import UserForm from './components/UserForm';
import LandingPage from './components/presignin/LandingPage';
import Home from './components/postsigin/home'
import SignIn from './components/presignin/signin';

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Change 'index' to 'path="/" element' */}
        <Route path="/signup" element={<UserForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router> 
  );
};

export default App;
