import React, { Component } from 'react';
import './WorkoutContainer.css';
import WorkoutTodayCard from '../components/WorkoutTodayCard/WorkoutTodayCard';

class WorkoutContainer extends Component {
  // time will in sec
  // weight will be in lb
  state = {workoutTodayList: [
      {name: 'Stationary Bike',time: 120},
      {name: 'Side Plank Abduction Right', sets: 3, reps: 10, band: 'yellow' },
      {name: '20ft Band Walks', sets: 3, band: 'blue', misc: 'around ankles'},
      {name: 'Squat', reps: 10, sets: 3, weight: 20 }
    ]
  };

   workoutTile = () => {
  return this.state.workoutTodayList.map(workout =>{

      return(  <WorkoutTodayCard workout={workout} />
      )
    });
  };

  render(){

    return (
      <div >
        <h1>Work out for today</h1>
        <section className="posts">{this.workoutTile()}</section>
      </div>
    )
  }
}

export default WorkoutContainer;
