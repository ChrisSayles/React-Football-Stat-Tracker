import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  Form,
  label,
  input
} from 'react-bootstrap';
import axios from 'axios';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        lastName: '',
        firstName: ''
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

  getPlayer = (e) => {
    e.preventDefault();
    let player = Object.assign({}, this.state.player);

    axios({method: 'get', url: '/nflplayer', params: player, responseType: 'json'})
      .then(function (response) {
        console.log('response', response);
      })
      .catch(function (error) {
        console.error('error', error);
      });
  }

    updatePlayerName = (e) => {
    let playerObject = Object.assign({}, this.state.player);

    // we have to make sure the id's match the state key values this way but it is
    // neater
    playerObject[e.target.id] = e.target.value;
    this.setState({player: playerObject});

  }

  render() {
    return (
      <Grid style={{
        marginTop: 6 + 'rem'
      }}>
        <Row className="show-grid">
          <Col xs={12} md={12}>
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
          </Col>
        </Row>

        <Row className="show-grid" action='/nflplayer' method='get'>
          <Col xs={12} md={8}>
            <form>
              <label>
                First Name:
                <input onChange={this.updatePlayerName} type="text" id='firstName'/>
              </label>
              <label>
                Last Name:
                <input onChange={this.updatePlayerName} type="text" id='lastName'/>
              </label>
              <button onClick={this.getPlayer} type='Submit'>Submit</button>
            </form>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default MainPage;