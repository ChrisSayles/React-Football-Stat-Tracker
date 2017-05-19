import React, { Component } from 'react';
import axios from 'axios';

class TeamScheduleSearch extends Component {
   constructor(props) {
     super(props);
     this.state = {
      teamName: ''
     }
   };

   updateTeamName = (e) => {
    let currentName = this.state.teamName;
    currentName = e.target.value;
    this.setState({teamName: currentName});
   };

   getTeamSchedule= (e) => {
    let teamObject = {
      nflschedule: this.state.teamName
    }
    e.preventDefault();
    this.props.getSchedule(teamObject);
   }

	render() {
		return (
			<div className='row'>
          <div className='col'>
            <form>
              <label>
                Team Abbreviated Name (Schedule):
                <input type="text" onChange={this.updateTeamName} id='teamScheduleSearch'/>
              </label>
              <button onClick={this.getTeamSchedule}type='Submit'>Submit</button>
            </form>
          </div>
        </div>
		);
	}
}

export default TeamScheduleSearch;