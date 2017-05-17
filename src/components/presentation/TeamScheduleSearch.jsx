import React, { Component } from 'react';

class TeamScheduleSearch extends Component {
	render() {
		return (
			<div className='row'>
          <div className='col'>
            <form>
              <label>
                Team Abbreviated Name:
                <input type="text" id='teamScheduleSearch'/>
              </label>
              <button type='Submit'>Submit</button>
            </form>
          </div>
        </div>
		);
	}
}

export default TeamScheduleSearch;