import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import TodoListContainer from './containers/TodoListContainer';
import TodoContainer from './containers/TodoContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TodoListContainer} />
    <Route path="/todo" component={TodoContainer} />
  </Route>
);