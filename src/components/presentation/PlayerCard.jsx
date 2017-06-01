import React, {Component} from 'react';
import cheerio from 'cheerio';
import axios from 'axios';
import { connect } from 'react-redux';


class PlayerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerPic: ''
    }
  }

componentDidMount() {
     
  }

  getPlayerPic = (profileUrl) => {
  const self = this;
    axios.get(profileUrl).then((response) => {
      let $ = cheerio.load(response.data);
      // console.log('response', response.data);
      let gotUrl= $('img', '.player-photo').attr('src');      
      self.setState({playerPic: gotUrl});
      
    });    
  }

            // <li className="list-group-item">{this.props.playerStats.passing.passingYds}</li>
            // <li className="list-group-item">{this.props.playerBio.birthDate}</li>
            // <li className="list-group-item">{this.props.playerBio.height}</li>

  getPlayerStats = () => {
 switch (this.props.playerBio.position) {
  case 'QB':
    return (
        <div>
            <li className="list-group-item">Total Yards: {this.props.playerStats.passing.passingYds}</li>
            <li className="list-group-item">Total TDs: {this.props.playerStats.passing.passingTds}</li> 
            <li className="list-group-item">Total INTs: {this.props.playerStats.passing.passingInt}</li>         
        </div>
        )
    break;
  case 'RB':
    return (
        <div>
            <li className="list-group-item">Attempt: {this.props.playerStats.rushing.attempt}</li>
            <li className="list-group-item">Total Rushing Yards: {this.props.playerStats.rushing.rushingYds}</li> 
            <li className="list-group-item">Total TDs: {this.props.playerStats.rushing.tds}</li>         
        </div>
        )
    break;
  case 'WR':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'TE' :
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'OL':
    console.log('Cherries are $3.00 a pound.');
    break;
  default:
    console.log('Defensive Players');
}

  }

  render() {   
    // our searched player will always be in the first position of an array
    const player = this.props.player[0];
    // moved this down from componentDidMount due to pic not changing when searching a new player
    this.getPlayerPic(player.profileUrl);
    return (
      <div className="p-2" style={{maxWidth: 20+"%" }}>
        <div className="card">
          <img className="card-img-top" src={this.state.playerPic} alt="Card image cap"/>
          <div className="card-block">
          <h4 className="card-title">{player.fullName}</h4>
          <div className="card-text">Position: {player.position}</div>
          <div className="card-text">Uniform Number: {player.uniformNumber}</div>
          </div>
          <ul className="list-group list-group-flush">
          {/*this.getPlayerStats()*/}
          </ul>
          <div className="card-block">
          <a target="_blank" href={player.profileUrl} className="card-link">NFL Profile</a>
          </div>
          </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {player: state.player}
}

export default connect(mapStateToProps, null)(PlayerCard);