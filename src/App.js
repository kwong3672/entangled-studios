import React, { Component } from 'react';

import NavBar from './components/NavBar';
import SectionList from './components/SectionList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-secondaryNav">
          <h2>Sections</h2>
        </div>
        <div className="App-container">
          <div className="App-sideNav" />
          <div className="App-content">
            <SectionList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
