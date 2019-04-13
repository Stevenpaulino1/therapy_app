import React from 'react';
import './WorkoutTodayCard.css';

const WorkoutTodayCard = (props) => {
  console.log(props)

  return(
    <div className="card">
        <h1 className="name">{props.workout.name}</h1>

    </div>
  )

};

export default WorkoutTodayCard;

// <div className="Info">
//     <div className="Author">{props.author}</div>
// </div>
