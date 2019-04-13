import React, { Component } from 'react';
import './App.css';
import WorkoutContainer from './containers/WorkoutContainer';
import CurrentWorkout from './components/CurrentWorkout/CurrentWorkout'
import Toolbar from './components/Toolbar/Toolbar';
import WorkoutTodayCard from './components/WorkoutTodayCard/WorkoutTodayCard'
import {Route, Switch } from "react-router-dom"

class App extends Component {
  state = {
    current: '',
    show: true
  }

  handleUrlChange = (obj) => {
    //console.log(obj)
    this.setState(() => {
      return {current: obj, show: false}
    })
  }

  render() {
    //console.log(this.state, "app state")
    if(this.state.show){
      return(
        <div className="app">
          <Toolbar />
          <WorkoutContainer handleUrlChange={this.handleUrlChange}/>
        </div>
      )
    } else {
      return(
        <div className="app">
          <Toolbar />
          <CurrentWorkout data={this.state.current.workout} />
        </div>
      )
    }
  }
}

export default App;
