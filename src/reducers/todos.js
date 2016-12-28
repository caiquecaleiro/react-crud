import { FETCH_TODOS } from '../actions/types';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, all: action.payload.data.todos };
  }
  return state;
}