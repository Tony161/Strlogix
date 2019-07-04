import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Registration from '../registration';
// import Recovery from '../recovery';

export default () => (
  <section>
    <Switch>
      <Route path={'/register'} component={Registration} />
      {/* <Route path={'/recovery'} component={Recovery} /> */}
      <Redirect to={'/register'} />
    </Switch>
  </section>
);
