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
    let teamObject = {nflroster: this.state.teamName};
    
    this.props.getTeam(teamObject);

  }

  render() {
    return (
      <div className='row'>
          <div className='col'>
            <form>
              <label>
                Team Abbreviated Name (Roster):
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