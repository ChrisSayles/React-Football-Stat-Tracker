import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class MainFooter extends Component {
  render() {
    return (
      <div>
        <Navbar className='text-center' fixedBottom={true}>
            <Navbar.Brand className='nav-justified'>
              © 2017
            </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default MainFooter;