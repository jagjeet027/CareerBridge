import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import HomePage from './pages/HomePage';
import JobBoard from './components/UI/JobBoard'; // Import JobBoard component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobboard" element={<JobBoard />} /> {/* Add JobBoard route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
