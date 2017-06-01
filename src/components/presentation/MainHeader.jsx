import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class MainHeader extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand">React Football</Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav navbar-right">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/data" className="nav-link">Data Visuals</Link>
              </li>
              <li className="nav-item">
                <Link to="/favorite" className="nav-link" >Favorite Players</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MainHeader;