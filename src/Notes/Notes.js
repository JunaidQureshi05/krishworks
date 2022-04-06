import React from 'react';
import './Notes.css';
const Notes = () => {
  return (
    <div className="Notes">
      <div className="top">
        <p>Notes</p> <p>See All</p>
      </div>
      <div className="board">
        - Lorem, ipsum dolor. - Lorem, ipsum dolor. - Lorem, ipsum dolor.
      </div>
      <button className="save-btn">save note</button>
      <div></div>
    </div>
  );
};

export default Notes;
