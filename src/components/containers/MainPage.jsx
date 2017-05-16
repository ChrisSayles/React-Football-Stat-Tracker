import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    Object.keys(currentState).forEach(v => currentState[v] = false);
    
    currentState[e.target.name] = true;
    console.log("current state", currentState);
    console.log("target name",e.target.name);
    this.setState({
      renderComponents: currentState
    })
  }
  
  render() {
    return (
      <Grid style={{marginTop: 6+'rem'}}>
        <Row className="show-grid">
          <Col xs={12} md={12}>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a name='playerBio' 
              onClick={this.renderTabInfo}
              className="nav-link active"
               href="#">Player Bio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"
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

        

      </Grid>
    );
  }
}

export default MainPage;