import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Registration from '../registration';

// import Recovery from '../recovery';
import Login from '../login';

export default () => (
  <section>
    <Switch>
      <Route path={'/register'} component={Registration} />
      {/* <Route path={'/recovery'} component={Recovery} /> */}
      <Route path={'/login'} component={Login} />
      <Redirect to={'/register'} />
    </Switch>
  </section>
);
