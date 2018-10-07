import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClimbList from './components/ClimbList';

// const CLIMBS = [{
//     name: 'Ace',
//     sent: true
//   },
//   {
//     name: 'Helicopter',
//     sent: true
//   },
//   {
//     name: 'Standard Deviation',
//     sent: true
//   },
// ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <ClimbList climbs={CLIMBS}/> */}
        <ClimbList/>
      </div>
    );
  }
}

export default App;
