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

  handleUrlChange = (id) => {
    console.log(id)
    //key.history.push(`/${props.key}`)
  }

  workoutTile = () => {
  return this.state.workoutTodayList.map((workout, i) =>{
      return(  <WorkoutTodayCard key={i} id={i+1} workout={workout} handleUrlChange={this.handleUrlChange}/>
      )
    });
  };

  render(){

    return (
      <div className="posts">
          {this.workoutTile()}
      </div>
    )
  }
}

export default WorkoutContainer;
