import React, { Component } from 'react';

class PlayerStatSearch extends Component {
  constructor(props) {
    super(props);
    this.state={
      player:{
        firstName: '',
        lastName: '',
    }
    };
  }


  updateStat = (e) => {
    let playerObject = Object.assign({}, this.state.player);

     playerObject[e.target.id] = e.target.value;
    this.setState({player: playerObject});
  };

  submitStat = (e) => {
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
                <input type="text" onChange={this.updateStat} id='firstName'/>
              </label>
              <label>
                Last Name:
                <input type="text" onChange={this.updateStat} id='lastName'/>
              </label>
              <button onClick={this.submitStat}type='Submit'>Submit</button>
            </form>
          </div>
        </div>
		);
	}
}

export default PlayerStatSearch;