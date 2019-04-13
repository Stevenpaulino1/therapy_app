import React, { Component } from 'react';
import './App.css';
import WorkoutContainer from './containers/WorkoutContainer';
import Toolbar from './components/Toolbar/Toolbar';
import WorkoutTodayCard from './components/WorkoutTodayCard/WorkoutTodayCard'
import {Route, Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="app">
        <Toolbar />
        <Switch>
          <Route exact path="/workouts" component={WorkoutContainer} />
          <Route exact path='/workouts/:id' component={WorkoutTodayCard} />
        </Switch>
      </div>
    );
  }
}

export default App;
