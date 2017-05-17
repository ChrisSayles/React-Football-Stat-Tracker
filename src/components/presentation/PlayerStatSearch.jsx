import React, { Component } from 'react';

class PlayerStatSearch extends Component {
	render() {
		return (
			<div className='row'>
          <div className='col'>
            <form>
              <label>
                First Name:
                <input type="text" id='firstName'/>
              </label>
              <label>
                Last Name:
                <input type="text" id='lastName'/>
              </label>
              <button type='Submit'>Submit</button>
            </form>
          </div>
        </div>
		);
	}
}

export default PlayerStatSearch;