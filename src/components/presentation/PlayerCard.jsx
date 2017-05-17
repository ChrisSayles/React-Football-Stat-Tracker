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
  
  
  componentDidMount() {
  const self = this;
    axios.get(this.props.playerBio.profileUrl).then((response) => {
      let $ = cheerio.load(response.data);
      // console.log('response', response.data);
      let gotUrl= $('img', '.player-photo').attr('src');
      
      self.setState({playerPic: gotUrl});
      
    });    
  }

  getPlayerPic = () => {

  }

  render() {
    return (
      <div>
        <div className="card" style={{
          width: 20 + 'rem'
        }}>
          <img className="card-img-top" src={this.state.playerPic} alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{this.props.playerName.firstName + " " + this.props.playerName.lastName}</h4>
            <p className="card-text">{`Position: ${this.props.playerBio.position} | Uniform Number: ${this.props.playerBio.uniformNum}`}</p>
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