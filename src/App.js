import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClickMeButt = event => {
    this.setState(prevState => {
      console.log("hellojolnl,")
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClickMeButt}>Click Me</button>
      </div>
    );
  }
}

export default App;
