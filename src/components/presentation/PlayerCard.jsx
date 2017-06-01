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

componentWillMount() {
  // this.getPlayerPic(this.props.playerBio.profileUrl);
  // const self = this;
  //   axios.get(this.props.playerBio.profileUrl).then((response) => {
  //     let $ = cheerio.load(response.data);
  //     // console.log('response', response.data);
  //     let gotUrl= $('img', '.player-photo').attr('src');
      
  //     self.setState({playerPic: gotUrl});
      
  //   });    
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
    
    return (
      <div className="p-2" style={{maxWidth: 20+"%" }}>
        <div>{this.props.player[0] ? this.props.player[0].fullName : ''}</div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {player: state.player}
}

export default connect(mapStateToProps, null)(PlayerCard);