import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PatientPage from './components/PatientPage/PatientPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="patient-list" element={<PatientPage />} />
      </Routes>
    </div>
  );
};

export default App;
