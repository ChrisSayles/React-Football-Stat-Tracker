import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import Home from './components/layout/Home';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(ReduxPromise))(createStore);


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

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, 
document.getElementById('root'));