import React, { Component } from 'react';
import './App.css';
import WorkoutContainer from './containers/WorkoutContainer';
import CurrentWorkout from './components/CurrentWorkout/CurrentWorkout'
import Toolbar from './components/Toolbar/Toolbar';
import WorkoutTodayCard from './components/WorkoutTodayCard/WorkoutTodayCard'
import {Route, Switch } from "react-router-dom"

class App extends Component {
  state = {
    current: ''
  }

  handleUrlChange = (obj) => {
    console.log(obj)
    this.setState(() => {
      return {current: obj}
    })
  }

  render() {
    console.log(this.state, "app state")
    return (
      <div className="app">
        <Toolbar />
        <Switch>
          <Route exact path='/' render={() => <WorkoutContainer handleUrlChange={this.handleUrlChange}/>} />
          <Route exact path='/workouts/:id' render={() => <CurrentWorkout {...this.state.current} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
