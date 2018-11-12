import React, { Component } from 'react';
import './App.css';

const GITHUB_URL = "https://api.github.com/users/mhoelzer";

class App extends Component {
  state = {
    user: {},
    active: false
  };

  handleClickMeButt = event => {
    fetch(GITHUB_URL)
      .then(response => response.json())
      .then(githubInfo => {
        this.setState({user: githubInfo});
        console.log({githubInfo});
        // console.log({user: githubInfo}); // same as above
      })
      .catch(err => console.log(`${err} error error error`));
    this.setState(prevState => ({
      // console.log("hellojolnl,")
      active: !prevState.active
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickMeButt}>Click Me</button>
        <div>
          {this.state.active ? 
            <div>
              <img src={this.state.user.avatar_url}/>
              <p>Name: {this.state.user.name}</p>
              <p>Username: {this.state.user.login}</p>
              <p>Portfolio: 
                <a href={this.state.user.blog} target="_blank">{this.state.user.blog}</a>
              </p>
              <p>Public Repositories: {this.state.user.public_repos}</p>
            </div>
          : null}
          {/* could also do this.state.active && ... and leave off the : null */}
        </div>
      </div>
    );
  }
}

export default App;