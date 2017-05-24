import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/layout/Home';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, 
document.getElementById('root'));