import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import todos from './todos';

const rootReducer = combineReducers({
  todos,
  form
});

export default rootReducer;