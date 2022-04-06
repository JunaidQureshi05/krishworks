import React from 'react';
import './Overview.css';
const Overview = ({ patient }) => {
  console.log(patient);
  return (
    <div className="Overview">
      <div className="left-part">
        <div className="image">
          <img
            src="https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg"
            alt=""
          />
        </div>
        <div className="name-email">
          <p className="name">{patient.name}</p>
          <p className="email">{patient['e-email']}</p>
        </div>
        <div className="appointments">
          <div className="past">
            <div className="no">{patient.Past}</div>
            <div className="label">Past</div>
          </div>
          <div className="upcoming">
            <div className="no">{patient.Upcoming}</div>
            <div className="label">Upcoming</div>
          </div>
        </div>
        <button>Send Message</button>
      </div>
      <div className="right-part">
        <div>
          <div className="label">Gender</div>
          <div className="value">{patient.Gender}</div>
        </div>
        <div>
          <div className="label">Birthday</div>
          <div className="value">{patient.Birthday}</div>
        </div>
        <div>
          <div className="label">Phone Number</div>
          <div className="value">{patient['Phone Number']}</div>
        </div>
        <div>
          <div className="label">Street Address</div>
          <div className="value">{patient['Street Address']}</div>
        </div>
        <div>
          <div className="label">City</div>
          <div className="value">Cilacap</div>
        </div>
        <div>
          <div className="label">ZIP Code</div>
          <div className="value">{patient['ZIP Code']}</div>
        </div>
        <div>
          <div className="label">Membership Status</div>
          <div className="value">{patient['Member Status']}</div>
        </div>
        <div>
          <div className="label">Registered Date</div>
          <div className="value">{patient['Register Date']}</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
