import React, { Component } from 'react';
import './App.css';
import WorkoutContainer from './containers/WorkoutContainer';
import Toolbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Toolbar />
        <WorkoutContainer />
      </div>
    );
  }
}

export default App;
