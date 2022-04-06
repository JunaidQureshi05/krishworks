import React from 'react';
import './Files.css';
const Files = () => {
  return (
    <div className="Files">
      <div className="top">
        <span className="heading">Files/Documents</span>
        <span className="link">
          <i class="fa-solid fa-file"></i> Add Files
        </span>
      </div>
      <div className="files">
        <li>
          <i class="fa-solid fa-file"></i> X-ray
        </li>
        <li>
          <i class="fa-solid fa-file"></i> Medical Prescription
        </li>
        <li>
          <i class="fa-solid fa-file"></i> Dental X-Ray Result
        </li>
      </div>
    </div>
  );
};

export default Files;
