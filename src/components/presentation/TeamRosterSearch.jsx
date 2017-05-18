import React, { Component } from 'react';

import axios from 'axios';

class TeamRosterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: ''
    }
  }

  updateTeamName = (e) => {
    let currentName = this.state.teamName;
    currentName = e.target.value;
    this.setState({teamName: currentName});
  }

  getTeamRoster = (e) => {
    e.preventDefault();

    let teamAbr = {nflroster: this.state.teamName}

    axios({method: 'get', url: '/nflroster', params: teamAbr, responseType: 'json'}).then(function (response) {
      console.log('response team roster', response);
    })
      .catch(function (error) {
        console.error('error', error);
      });
  }

  render() {
    return (
      <div className='row'>
          <div className='col'>
            <form>
              <label>
                Team Abbreviated Name:
                <input type="text" onChange={this.updateTeamName} id='teamrostersearch'/>
              </label>
              <button onClick={this.getTeamRoster} type='Submit'>Submit</button>
            </form>
          </div>
        </div>
    );
  }
}

export default TeamRosterSearch;