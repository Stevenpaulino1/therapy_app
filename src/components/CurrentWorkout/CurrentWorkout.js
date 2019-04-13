import React, { Component } from "react";
import Clock from "../Clock/Clock";
import "./CurrentWorkout.css";
class CurrentWorkout extends Component {
  render() {
    console.log("this props", this.props);
    return (
      <div className="center">
        <h1>This is the {this.props.data.name} workout!</h1>
        <strong className="text">
          TIME REMAINING:
          <Clock time={this.props.data.time} />
        </strong>
      </div>
    );
  }
}

export default CurrentWorkout;
