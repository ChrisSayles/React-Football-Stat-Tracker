import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  Form,
  label,
  input
} from 'react-bootstrap';

class PlayerCard extends Component {

  render() {
    return (
      <div>
        <div className="card" style={{
          width: 20 + 'rem'
        }}>
          <img className="card-img-top" src="..." alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{this.props.playerName.firstName + " " + this.props.playerName.lastName}</h4>
            <p className="card-text">Some quick example text to build on the card title and
              make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{this.props.playerBio.college}</li>
            <li className="list-group-item">{this.props.playerBio.birthDate}</li>
            <li className="list-group-item">{this.props.playerBio.height}</li>
          </ul>
          <div className="card-block">
            <a target="_blank" href={this.props.playerBio.profileUrl} className="card-link">NFL Profile</a>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerCard;