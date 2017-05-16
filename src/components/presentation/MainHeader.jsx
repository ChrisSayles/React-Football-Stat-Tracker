import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class MainHeader extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Football</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight={true}>
            <NavItem eventKey={1} href="#">Data Visual</NavItem>
            <NavItem eventKey={2} href="#">Favorite Players</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MainHeader;