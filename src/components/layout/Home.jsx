import React, { Component } from 'react';
import { MainHeader, MainFooter } from '../presentation/';
import MainPage from '../containers/MainPage';

class Home extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <MainPage />
        <MainFooter />
      </div>
    );
  }
}

export default Home;