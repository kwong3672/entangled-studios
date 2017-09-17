import React from 'react';
import hamburger from '../assets/hamburger.svg';
import magnify from '../assets/magnify.svg';
import './SectionHeader.css';

const SectionHeader = props => 
  <div className="SectionHeader">
    <div className="left-justify">
      <div className="hamburger-container">
        <img src={hamburger} alt="" className="hamburger-image" />
      </div>
      <div className="header-title">ACTIVE SECTIONS</div>
    </div>
    <div className="search-bar-container right-justify">
      <input className="search-bar" placeholder="Search Sections" />
      <img src={magnify} alt="" className="search-bar-image" />
    </div>
  </div>

export default SectionHeader; 
