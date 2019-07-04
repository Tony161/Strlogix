import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Registration from '../registration';

// import Recovery from '../recovery';
import Login from '../login';
import Profile from '../profile';

export default () => (
  <section>
    <Switch>
      <Route path={'/register'} component={Registration} />
      {/* <Route path={'/recovery'} component={Recovery} /> */}
      <Route path={'/login'} component={Login} />
      <Route path={'/profile'} component={Profile} />
      <Redirect to={'/register'} />
    </Switch>
  </section>
);
