import React, { Component } from "react";
import Countdown from "react-countdown-now";

class Clock extends Component {
  state = {
    clicked: false
  };

  startClock = () => {
    console.log("in clock");
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        {this.state.clicked ? (
          <Countdown date={Date.now() + 5000} />
        ) : (
          <button onClick={this.startClock}>Start the Clock!</button>
        )}
        <span>You are good to go!</span>
      </div>
    );
  }
}

export default Clock;
//
//

//
//
//
//
// render() {
//   return (
//     <div>
//       <span>You are good to go!</span>
//     </div>
//   );
// }
// }
