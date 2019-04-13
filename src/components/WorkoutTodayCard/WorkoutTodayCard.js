import React from 'react';
import './WorkoutTodayCard.css';
//import { Link } from 'react-router-dom';

const WorkoutTodayCard = (props) => {
  //console.log(props)
  return(
    <div className="card" onClick={() => props.handleUrlChange(props)}>
      <h1 className="name">{props.workout.name}</h1>
    </div>
  )

};

export default WorkoutTodayCard;

// <div className="Info">
//     <div className="Author">{props.author}</div>
// </div>
