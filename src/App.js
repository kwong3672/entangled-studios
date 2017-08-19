import React, { Component } from 'react';

import NavBar from './components/NavBar';
import SectionList from './components/SectionList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-container">
          <div className="App-sideNav">
            Don't Fill me out
          </div>
          <div className="App-content">
            <SectionList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
