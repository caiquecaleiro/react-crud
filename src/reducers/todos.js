import { FETCH_TODOS, DELETE_TODO, TODO_ERROR, FETCH_TODO } from '../actions/types';

const INITIAL_STATE = { all: [], todo: {} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, error: '', all: action.payload, todo: {} };
    case FETCH_TODO:
      return { ...state, error: '', todo: action.payload };
    case DELETE_TODO:
      return { ...state, all: state.all.filter((todo) => todo._id !== action.payload) };
    case TODO_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}