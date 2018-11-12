import React, { Component } from 'react';
import './App.css';
import { Button, Card, CardTitle, Container } from 'react-materialize';

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
        this.setState({ user: githubInfo });
        console.log({ githubInfo });
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
      <div className="main">
        <br />
        <Container>
          <a className="orange btn-floating btn-large waves-effect waves-red" onClick={this.handleClickMeButt}><i class="material-icons">music_note</i></a>
          {this.state.active ?
            <div>
              {/* <Button floating large className="orange btn-large waves-effect waves-red" onClick={this.handleClickMeButt} icon="clear"></Button>  --> if do this, put the above where null is */}
              <Card horizontal
                header={
                  <CardTitle image={this.state.user.avatar_url} />
                }
                actions={[<p>Portfolio: <a href={this.state.user.blog} target="_blank">{this.state.user.blog}</a></p>]}
              >
                <p>Name: {this.state.user.name}</p>
                <p>Username: {this.state.user.login}</p>
                <p>Public Repositories: {this.state.user.public_repos}</p>
              </Card>
            </div>
            : null}
          {/* could also do this.state.active && ... and leave off the : null */}
        </Container>
      </div>
    );
  }
}

export default App;