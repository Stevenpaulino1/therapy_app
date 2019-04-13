import React, { Component } from "react";
import "./Navbar.css";

class Toolbar extends Component {
  render() {
    return (
      <div className="topnav">
        <a className="active lBlock" href="#home">
          Home
        </a>
        <a className="lBlock" href="#signUp">
          Sign Up
        </a>
        <a className="rBlock" href="#login">
          Login
        </a>
      </div>
    );
  }
}

export default Toolbar;
