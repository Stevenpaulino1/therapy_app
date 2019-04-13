import React, { Component } from 'react';

class CurrentWorkout extends Component {
  render(){
    console.log(this.props)
    return(
      <div>
        <h1>{this.props.data.name}</h1>
        <h1>{this.props.data.time}</h1>
      </div>
    )
  }
}


export default CurrentWorkout;
