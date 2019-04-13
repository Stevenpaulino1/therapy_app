import React, { Component } from 'react';
import './App.css';
import WorkoutContainer from './containers/WorkoutContainer';

class App extends Component {
  render() {
    return (
      <div className="posts">
        <WorkoutContainer />
      </div>
    );
  }
}

export default App;
