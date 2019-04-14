import React, { Component } from "react";
import Clock from "../Clock/Clock";
import "./CurrentWorkout.css";
import ReactCountdownClock from "react-countdown-clock";
class CurrentWorkout extends Component {
  myCallback = () => {
    return "";
  };
  render() {
    console.log("this props", this.props);
    return (
      <div className="center">
        <h1>This is the {this.props.data.name} workout!</h1>
        <strong className="text">
          TIME REMAINING:
          <ReactCountdownClock
            seconds={this.props.data.time}
            color="#000"
            alpha={0.9}
            size={300}
            onComplete={this.myCallback()}
          />
        </strong>
      </div>
    );
  }
}

export default CurrentWorkout;
//<Clock time={this.props.data.time} />;
