import { FETCH_TODOS, DELETE_TODO, TODO_ERROR } from '../actions/types';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, error: '', all: action.payload };
    case DELETE_TODO:
      return { ...state, all: state.all.filter((todo) => todo._id !== action.payload) };
    case TODO_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}