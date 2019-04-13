import React, { Component } from 'react';
import Clock from "../Clock/Clock";


class CurrentWorkout extends Component {
  render(){
    console.log(this.props)
    return(
      <div>
        <Clock time={this.props.data.time}/>
      </div>
    )
  }
}


export default CurrentWorkout;
