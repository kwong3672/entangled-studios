import React from 'react';
import './Exercise.css';

const Exercise = props => 
  <div className="Exercise">
    <div className="Exercise-row">
      <img className="Exercise-image" src={props.imageUri} alt="" />
      <div className="Exercise-text-container">
        <div className="Exercise-name">{props.name}</div>
        <div className="Exercise-peer-review">{props.peerReviewDue}</div>
      </div>
    </div>
  </div>

export default Exercise;
