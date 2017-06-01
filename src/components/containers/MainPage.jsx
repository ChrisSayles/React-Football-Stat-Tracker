import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchPlayer } from '../../actions';
import {PlayerCard, PlayerBioSearch, PlayerStatSearch, TeamRosterSearch, TeamScheduleSearch, TeamScheduleCard, TopTeamPlayers } from '../presentation/';
import FullTeamRoster from './FullTeamRoster';

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
      returnedStats: {},
      fullTeam: [],
      fullSchedule: [],     
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

    axios({method: 'get', url: '/nflplayerstats', params: player, responseType: 'json'}).then(function (response) {
      console.log('response', response);
      let currentStats = Object.assign({}, self.state.returnedStats);
      currentStats = response.data[0];
      self.setState({returnedStats: currentStats});
    })
      .catch(function (error) {
        console.error('error', error);
      });
  }

  //get player stats
  getPlayerStats = (playerObject) => {
    const self = this;
    axios({method: 'get', url: '/nflplayerstats', params: playerObject, responseType: 'json'}).then(function (response) {
      console.log('response', response);
      let currentStats = Object.assign({}, self.state.returnedStats);
      currentStats = response.data[0];
      self.setState({returnedStats: currentStats});
    })
      .catch(function (error) {
        console.error('error', error);
      });
  }

  getTeamRoster = (team) => {    
    const self = this;
    axios({method: 'get', url: '/nflroster', params: team, responseType: 'json'}).then(function (response) {
      console.log('response team roster', response);
      let currentFullTeam = Object.assign([], self.state.fullTeam);
      currentFullTeam = response.data;
      self.setState({fullTeam: currentFullTeam});

      // self.getRbYards(response.data);

    })
      .catch(function (error) {
        console.error('error', error);
    });
  }

  getTeamSchedule= (schedule) => {
    const self = this;
   axios({method: 'get', url: '/nflschedule', params: schedule, responseType: 'json'}).then(function (response) {
      console.log('response team roster', response);
      let currentFullSchedule = Object.assign([], self.state.fullSchedule);
      currentFullSchedule = response.data;
      self.setState({fullSchedule: currentFullSchedule});

    })
      .catch(function (error) {
        console.error('error', error);
    });
  }

  getStats = (array) => {
    const allRb = [];
    const allWr = [];
    let currentState = Object.assign({}, this.state.teamStats);
    array.map((object, i) => {
      if(object.position === 'RB') {
        let rbName = {
          lastName: object.lastName,
          firstName: object.firstName
        };
        axios({method: 'get', url: '/nflplayerstats', params: rbName, responseType: 'json'}).then(function (response) {
          let rushingStats = response.data[0].rushing;
          allRb.push({
            name: object.fullName,
            yards: rushingStats.rushingYds,
            tds: rushingStats.tds
          });          
        }).catch(function (error) {
          console.log('error', error)
        });
      }
      else if(object.position === 'WR') {
        let wrName = {
          lastName: object.lastName,
          firstName: object.firstName
        };
        axios({method: 'get', url: '/nflplayerstats', params: wrName, responseType: 'json'}).then(function (response) {
          let receivingStats = response.data[0].receiving;
          allWr.push({
            name: object.fullName,
            yards: receivingStats.receivingYds,
            tds: receivingStats.tds
          });          
        }).catch(function (error) {
          console.log('error', error)
        });
      }

    })     
    console.log('RBs',allRb);
    console.log('WRs',allWr);
    this.setState({
      receiving: allWr,
      rushing: allRb
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
                  className={"nav-link " + (this.state.renderComponents.playerBio === true ? 'active' : '')}
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
                <a className={"nav-link " + (this.state.renderComponents.teamRoster === true ? 'active' : '')}
                name='teamRoster'
                onClick={this.renderTabInfo}
                 href="#">Team Roster</a>
              </li>
              <li className="nav-item">
                <a className={"nav-link " + (this.state.renderComponents.teamSchedule === true ? 'active' : '')}
                name='teamSchedule'
                onClick={this.renderTabInfo}
                 href="#">Team Schedule</a>
              </li>
            </ul>
          </div>
        </div>
        

        
        {this.state.renderComponents.playerBio === true ? <PlayerBioSearch getStats={this.props.fetchPlayer} /> : <div></div>} 
        {this.state.renderComponents.teamRoster === true ? <TeamRosterSearch getTeam={this.getTeamRoster} /> : <div></div>}        
        {this.state.renderComponents.teamSchedule === true ? <TeamScheduleSearch getSchedule={this.getTeamSchedule} /> : <div></div>}   
        
        <PlayerCard />
        {/*this.state.currentPlayerBio.profileUrl ? <PlayerCard
          playerName={this.state.submittedPlayer}
          playerBio={this.state.currentPlayerBio}
          playerStats={this.state.returnedStats}/>
        : <div></div>*/}

        {this.state.renderComponents.teamRoster === true ? <FullTeamRoster fullTeam={this.state.fullTeam}  /> : <div></div>}   

        {this.state.renderComponents.teamSchedule === true ? <TeamScheduleCard fullSchedule={this.state.fullSchedule} /> : <div></div>}

        <TopTeamPlayers fullTeam={this.state.fullTeam} getStats={this.getStats} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {player: state.player }
}

export default connect(mapStateToProps, { fetchPlayer })(MainPage);