/* global location */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../stores/index';
import { Router, Route, Switch } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import Home from './pages/home';
import Error404 from './pages/error404';
import { createBrowserHistory } from 'history';

const history = syncHistoryWithStore(createBrowserHistory(), store);
console.log(history);

class App extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="view-container">
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/404" component={Error404} />
              <Route nomatch component={Error404} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

App.displayName = 'App';

// Bootstrap client
if (typeof window !== 'undefined') {
  window.onload = () => {
    var props = {
      path: location.pathname
    };
    ReactDOM.render(React.createElement(App, props), document.getElementById('reactView'));
  };
}

export default App;
