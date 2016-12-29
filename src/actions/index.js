import axios from 'axios';
import { browserHistory } from 'react-router';

import { 
  FETCH_TODOS, 
  DELETE_TODO, 
  TODO_ERROR, 
  FETCH_TODO,
  CREATE_TODO,
  UPDATE_TODO
} from './types';

const API_URL = 'http://localhost:3000';

export function fetchTodos() {
  return (dispatch) => {
    axios.get(`${API_URL}/todos`)
      .then(response => {
        dispatch({ 
          type: FETCH_TODOS,
          payload: response.data.todos
        });
      })
      .catch(error => {
        dispatch(todoError(error.response.data.error));
      });
  };
}

export function fetchTodo(id) {
  return (dispatch) => {
    axios.get(`${API_URL}/todos/${id}`)
      .then(response => {
        dispatch({
          type: FETCH_TODO,
          payload: response.data.todo
        })
      })
      .catch(error => {
        dispatch(todoError(error.response.data.error));
      });
  };
}

export function deleteTodo({ _id }) {
  return (dispatch) => {
    axios.delete(`${API_URL}/todos/${_id}`)
      .then(response => {
        dispatch({
          type: DELETE_TODO,
          payload: response.data.todo._id
        });
      })
      .catch(error => {
        dispatch(todoError(error.response.data.error));
      });
  };
}

export function createTodo(props) {
  return (dispatch) => {
    axios.post(`${API_URL}/todos`, props)
      .then(response => {
        dispatch({
          type: CREATE_TODO,
          payload: response.data.todo
        });
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(todoError(error.response.data.error));
      });
  };
}

export function updateTodo(id, props) {
  return (dispatch) => {
    axios.patch(`${API_URL}/todos/${id}`, props)
      .then(response => {
        dispatch({
          type: UPDATE_TODO,
          payload: response.data.todo
        });
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(todoError(error.response.data.error));
      });
  };
}

export function todoError(error) {
  return (dispatch) => {
    dispatch({
      type: TODO_ERROR,
      payload: error
    });
  };
}