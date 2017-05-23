import React, {Component} from 'react';
import cheerio from 'cheerio';
import axios from 'axios';



class PlayerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerPic: ''
    }
  }

componentWillMount() {
  this.getPlayerPic(this.props.playerBio.profileUrl);
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
        <div className="card">
          <img className="card-img-top" src={this.state.playerPic} alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{this.props.playerName.firstName + " " + this.props.playerName.lastName}</h4>
            <div className="card-text">Position: {this.props.playerBio.position}</div>
            <div className="card-text">Uniform Number: {this.props.playerBio.uniformNum}</div>
          </div>
          <ul className="list-group list-group-flush">
            {/*this.getPlayerStats()*/}
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