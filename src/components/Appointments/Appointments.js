import React from 'react';
import './Appointment.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Appointments = () => {
  const [records, setRecords] = useState({});
  const [allData, setAllData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://619f39821ac52a0017ba467e.mockapi.io/appointment_details'
      );
      setAllData(data[0]);
      setRecords(data[0]['Upcoming Appointments']);
    };
    getData();
  }, []);
  return (
    <div className="Appointments">
      <div className="btns">
        <button className="btn-active">Upcoming Appointments</button>
        <button
          onClick={() => {
            setRecords(allData['Post Appointment']);
          }}
        >
          Past Appointments
        </button>
        <button>Medical Records</button>
      </div>
      <div className="records">
        <div className="record">
          <div>
            <h3>{records.Date}</h3>
            <div>{records.Time}</div>
          </div>
          <div>
            <div className="label">Treatment</div>
            <div>{records.Treatment}</div>
          </div>
          <div>
            <div className="label">Dentist</div>
            <div>{records.Dentist}</div>
          </div>
          <div>
            <div className="label">Nurse</div>
            <div>{records.Nurse}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
