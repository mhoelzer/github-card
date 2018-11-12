import React, { Component } from 'react';
import './App.css';

const GITHUB_URL = "https://api.github.com/users/mhoelzer";

class App extends Component {
  state = {
    user: {},
    active: false
  };

  handleClickMeButt = event => {
    // this.setState(prevState => {
    //   console.log("hellojolnl,")
    // });
    fetch(GITHUB_URL)
      .then(response => response.json())
      .then(githubInfo => {
        this.setState({user: githubInfo})
        console.log({githubInfo})
        // console.log({user: githubInfo}); // same as above
      })
      .catch(err => console.log(`${err} error error error`))
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
