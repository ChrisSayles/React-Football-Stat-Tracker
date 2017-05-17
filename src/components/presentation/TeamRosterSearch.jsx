import React, { Component } from 'react';

class TeamRosterSearch extends Component {
  render() {
    return (
      <div className='row'>
          <div className='col'>
            <form>
              <label>
                Team Abbreviated Name:
                <input type="text" id='teamrostersearch'/>
              </label>
              <button type='Submit'>Submit</button>
            </form>
          </div>
        </div>
    );
  }
}

export default TeamRosterSearch;