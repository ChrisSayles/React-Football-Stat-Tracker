import React, {Component} from 'react';
import axios from 'axios';

import {PlayerCard, PlayerBioSearch, PlayerStatSearch, TeamRosterSearch } from '../presentation/';

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
        profileUrl: '',
        team: '',
        position: '',
        uniformNum: ''
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

  getPlayer = (player) => {
    // e.preventDefault();

    const self = this;

    let submittedPlayer = Object.assign({}, this.state.tempPlayer);
    this.setState({submittedPlayer: player});
    
    axios({method: 'get', url: '/nflplayer', params: player, responseType: 'json'}).then(function (response) {
      console.log('response', response);
      let returnedPlayer = response.data[0];
      let statsObject = Object.assign({}, self.state.currentPlayerBio);

      statsObject['birthDate'] = returnedPlayer.birthDate;
      statsObject['college'] = returnedPlayer.college;
      statsObject['height'] = returnedPlayer.height;
      statsObject['profileUrl'] = returnedPlayer.profileUrl;
      statsObject['team'] = returnedPlayer.team;
      statsObject['uniformNum'] = returnedPlayer.uniformNumber;
      statsObject['position'] = returnedPlayer.position;


      self.setState({currentPlayerBio: statsObject});
    })
      .catch(function (error) {
        console.error('error', error);
      });
  }

  //get player stats
  getPlayerStats = (playerObject) => {
    axios({method: 'get', url: '/nflplayerstats', params: playerObject, responseType: 'json'}).then(function (response) {
      console.log('response', response);

    })
      .catch(function (error) {
        console.error('error', error);
      });
  }

  getTeamRoster = (team) => {    
    axios({method: 'get', url: '/nflroster', params: team, responseType: 'json'}).then(function (response) {
      console.log('response team roster', response);
    })
      .catch(function (error) {
        console.error('error', error);
    });
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

        <PlayerBioSearch getStats={this.getPlayer} />

        <PlayerStatSearch getStats={this.getPlayerStats} />

        <TeamRosterSearch getTeam={this.getTeamRoster} />

        {this.state.currentPlayerBio.profileUrl ? <PlayerCard
          playerName={this.state.submittedPlayer}
          playerBio={this.state.currentPlayerBio}/>
        : <div></div>}

      </div>
    );
  }
}

export default MainPage;