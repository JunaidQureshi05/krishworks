import React from 'react';
import './PatientPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Overview from '../Overview/Overview';
import Appointments from '../Appointments/Appointments';
import Notes from '../../Notes/Notes';
import Files from '../../Files/Files';
const MainContent = () => {
  const [patient, setPatient] = useState({});
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://619f39821ac52a0017ba467e.mockapi.io/patientDetails'
      );
      setPatient(data[0]);
    };
    getData();
  }, []);
  return (
    <div className="PatientPage">
      <Header name={patient.name} />
      <div className="main">
        <Overview patient={patient} />
        <Notes />
        <Appointments />
        <Files />
      </div>
    </div>
  );
};

export default MainContent;
