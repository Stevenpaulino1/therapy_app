import React, { Component } from "react";
import "./WorkoutContainer.css";
import WorkoutTodayCard from "../components/WorkoutTodayCard/WorkoutTodayCard";

class WorkoutContainer extends Component {
  // time will in sec
  // weight will be in lb
  state = {
    workoutTodayList: [
      { name: "Stationary Bike", id: 1, time: 1200 },
      {
        name: "Side Plank Abduction Right",
        id: 2,
        sets: 3,
        reps: 10,
        band: "yellow"
      },
      {
        name: "20ft Band Walks",
        sets: 3,
        id: 3,
        band: "blue",
        misc: "around ankles"
      },
      { name: "Squat", reps: 10, sets: 3, id: 4, weight: 20 }
    ]
  };

  workoutTile = () => {
    return this.state.workoutTodayList.map(workout => {
      return (
        <WorkoutTodayCard
          key={workout.id}
          workout={workout}
          handleUrlChange={this.props.handleUrlChange}
        />
      );
    });
  };

  render() {
    return <div className="posts">{this.workoutTile()}</div>;
  }
}

export default WorkoutContainer;
