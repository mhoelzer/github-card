import React, {Component} from 'react';
import './App.css';
import {Button, Card, CardTitle, Container} from 'react-materialize';

const GITHUB_URL = "https://api.github.com/users/mhoelzer";

class App extends Component {
  state = {
    user: {},
    active: false
  };

  // handleClickMeButt = event => {
  //   fetch(GITHUB_URL)
  //     .then(response => response.json())
  //     .then(githubInfo => {
  //       this.setState(prevState => ({
  //         // the () implicitly returns it
  //         user: githubInfo, 
  //         active: !prevState.active
  //       }));
  //       console.log({githubInfo});
  //       // console.log({user: githubInfo}); // same as above
  //     })
  //     .catch(err => console.log(`${err} error error error`));
  // };
  
  // having the fetch stuff makes it load the ifno right away when pages loads so it's there fort the user right away and doenst cause a delay when lcicking b/c already loaded and there; renders for the first time
  componentDidMount = event => {
    fetch(GITHUB_URL)
      .then(response => response.json())
      .then(githubInfo => {
        this.setState({user: githubInfo})
        console.log({githubInfo})
      })
        // console.log({user: githubInfo}); // same as above
      .catch(err => console.log(`${err} error error error`));
  };
  
  handleClickMeButt = event => {
    this.setState(prevState => ({
      // the () implicitly returns it
      active: !prevState.active
    }));
  };

  render() {
    return (
      <div className="main">
        <br />
        <Container>
          <Button floating large className="orange waves-effect waves-red" onClick={this.handleClickMeButt}>:)</Button>
          {this.state.active ?
            <div>
              {/* <Button floating large className="orange btn-large waves-effect waves-red" onClick={this.handleClickMeButt} icon="clear"></Button>  --> if do this, put the above where null is with a + instead of :) */}
              <Card 
                horizontal
                header={<CardTitle image={this.state.user.avatar_url}/>}
                actions={[<p><b>Portfolio:</b> <a href={this.state.user.blog} target="_blank">{this.state.user.blog}</a></p>]}
              >
                <p><b>Name:</b> {this.state.user.name}</p>
                <p><b>Username:</b> {this.state.user.login}</p>
                <p><b>Public Repositories:</b> {this.state.user.public_repos}</p>
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