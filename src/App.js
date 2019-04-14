import React, { Component } from "react";
import "./App.css";
import WorkoutContainer from "./containers/WorkoutContainer";
import CurrentWorkout from "./components/CurrentWorkout/CurrentWorkout";
import Toolbar from "./components/Toolbar/Toolbar";
import Particles from "react-particles-js";
import WorkoutTodayCard from "./components/WorkoutTodayCard/WorkoutTodayCard";
import { Route, Switch } from "react-router-dom";

const particlesOption = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
};

class App extends Component {
  state = {
    current: "",
    show: true
  };

  handleUrlChange = obj => {
    //console.log(obj)
    this.setState(() => {
      return { current: obj, show: false };
    });
  };

  render() {
    //console.log(this.state, "app state")
    if (this.state.show) {
      return (
        <div className="app">
          <Particles className="particles" params={particlesOption} />
          <Toolbar />
          <WorkoutContainer handleUrlChange={this.handleUrlChange} />
        </div>
      );
    } else {
      return (
        <div className="app">
          <Particles className="particles" params={particlesOption} />
          <Toolbar />
          <CurrentWorkout data={this.state.current.workout} />
        </div>
      );
    }
  }
}

export default App;
