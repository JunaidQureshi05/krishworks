import React from 'react';
import './PatientPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
const MainContent = () => {
  const [patient, setPatient] = useState({});
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://619f39821ac52a0017ba467e.mockapi.io/patientDetails'
      );
      const { data: filesData } = await axios.get(
        'https://619f39821ac52a0017ba467e.mockapi.io/Files'
      );
      console.log(filesData[0]);
      setPatient(data[0]);
    };
    getData();
  }, []);
  return (
    <div className="PatientPage">
      <Header name={patient.name} />
      <div></div>
    </div>
  );
};

export default MainContent;
