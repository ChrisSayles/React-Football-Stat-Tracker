import React, { Component } from 'react';
import { MainHeader, MainFooter } from '../presentation/';
import MainPage from '../containers/MainPage';
import DataVisual from '../containers/DataVisual';
import FavoritePlayers from '../containers/FavoritePlayers';
import { Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/data" component={DataVisual} />
          <Route path="/favorite" component={FavoritePlayers} />
        </Switch>
        <MainFooter />
      </div>
    );
  }
}

export default Home;