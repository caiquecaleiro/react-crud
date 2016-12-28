import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import GridContainer from './containers/GridContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={GridContainer} />
  </Route>
);