import React, { Component } from 'react';

class PlayerBioSearch extends Component {
constructor(props) {
    super(props);
    this.state = {
      player: {
        lastName: '',
        firstName: ''
      }
    }
  }

  updatePlayerName = (e) => {
    let playerObject = Object.assign({}, this.state.player);

    // we have to make sure the id's match the state key values this way but it is
    // neater
    playerObject[e.target.id] = e.target.value;
    this.setState({player: playerObject});

  }

  submitPlayer = (e) => {
    e.preventDefault();
    this.props.getStats(this.state.player);
  }

	render() {
		return (
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
              <button onClick={this.submitPlayer} type='Submit'>Submit</button>
            </form>
          </div>
        </div>
		);
	}
}

export default PlayerBioSearch;