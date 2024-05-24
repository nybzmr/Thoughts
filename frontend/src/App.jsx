import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/home/pages/Login';
import Signup from './components/home/pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from './components/home/pages/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
