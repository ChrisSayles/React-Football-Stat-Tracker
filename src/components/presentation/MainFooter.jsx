import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class MainFooter extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light text-center bg-faded fixed-bottom">
          <a className="navbar-brand" href="#">
            © 2017
          </a>
        </nav>
      </div>
    );
  }
}

export default MainFooter;