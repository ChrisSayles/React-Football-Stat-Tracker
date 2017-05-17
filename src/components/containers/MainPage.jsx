import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  Form,
  label,
  input
} from 'react-bootstrap';
import axios from 'axios';

import {PlayerCard} from '../presentation/';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempPlayer: {
        lastName: '',
        firstName: ''
      },
      submittedPlayer: {
        lastName: '',
        firstName: ''
      },
      currentPlayerBio: {
        birthDate: '',
        college: '',
        height: '',
        profileUrl: ''
      },
      renderComponents: {
        playerBio: true,
        playerStats: false,
        teamSchedule: false,
        teamRoster: false
      }

    }
  }

  renderTabInfo = (e) => {
    e.preventDefault();
    let currentState = Object.assign({}, this.state.renderComponents);
    Object
      .keys(currentState)
      .forEach(v => currentState[v] = false);

    currentState[e.target.name] = true;
    console.log("current state", currentState);
    console.log("target name", e.target.name);
    this.setState({renderComponents: currentState})
  }

  getPlayer = (e) => {
    e.preventDefault();

    const self = this;
    let submittedPlayer = Object.assign({}, this.state.tempPlayer);
    this.setState({submittedPlayer: submittedPlayer});
    axios({method: 'get', url: '/nflplayer', params: submittedPlayer, responseType: 'json'}).then(function (response) {
      console.log('response', response);
      let returnedPlayer = response.data[0];
      let statsObject = Object.assign({}, self.state.currentPlayerBio);

      statsObject['birthDate'] = returnedPlayer.birthDate;
      statsObject['college'] = returnedPlayer.college;
      statsObject['height'] = returnedPlayer.height;
      statsObject['profileUrl'] = returnedPlayer.profileUrl;

      self.setState({currentPlayerBio: statsObject});
    })
      .catch(function (error) {
        console.error('error', error);
      });
  }

  //get player stats
  getPlayerStats = (e) => {
    e.preventDefault();
    let playerStats = Object.assign({}, this.state.tempPlayer);
    this.setState({submittedPlayer: playerStats});
    console.log(playerStats);
    axios({method: 'get', url: '/nflplayerstats', params: playerStats, responseType: 'json'}).then(function (response) {
      console.log('response', response);

    })
      .catch(function (error) {
        console.error('error', error);
      });
  }

  updatePlayerName = (e) => {
    let playerObject = Object.assign({}, this.state.tempPlayer);

    // we have to make sure the id's match the state key values this way but it is
    // neater
    playerObject[e.target.id] = e.target.value;
    this.setState({tempPlayer: playerObject});

  }

  updatePlayerStats = (e) => {
    let playerObject = Object.assign({}, this.state.tempPlayer);

    playerObject[e.target.id] = e.target.value;
    this.setState({tempPlayer: playerObject});

  }

  render() {
    return (
      <div className='container' style={{
        marginTop: 5 + 'rem'
      }}>
        <div className='row'>
          <div className='col'>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  name='playerBio'
                  onClick={this.renderTabInfo}
                  className="nav-link active"
                  href="#">Player Bio</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  name='playerStats'
                  onClick={this.renderTabInfo}
                  href="#">Player Stats</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Team Schedule</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Team Roster</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <form>
              <label>
                First Name:
                <input onChange={this.updatePlayerName} type="text" id='firstName'/>
              </label>
              <label>
                Last Name:
                <input onChange={this.updatePlayerName} type="text" id='lastName'/>
              </label>
              <button onClick={this.getPlayer} type='Submit'>Submit</button>
            </form>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <form>
              <label>
                First Name:
                <input onChange={this.updatePlayerStats} type="text" id='firstName'/>
              </label>
              <label>
                Last Name:
                <input onChange={this.updatePlayerStats} type="text" id='lastName'/>
              </label>
              <button onClick={this.getPlayerStats} type='Submit'>Submit</button>
            </form>
          </div>
        </div>
        {this.state.currentPlayerBio.profileUrl ? <PlayerCard
          playerName={this.state.submittedPlayer}
          playerBio={this.state.currentPlayerBio}/>
        : <div></div>}


      </div>
    );
  }
}

export default MainPage;