import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';
import Base from './routes/base';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">
            <Route path="/" component={Base} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
