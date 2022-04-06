import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PatientPage from './components/PatientPage/PatientPage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/patient-list');
  }, []);

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
