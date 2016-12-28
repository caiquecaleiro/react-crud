import axios from 'axios';

import { FETCH_TODOS } from './types';

const URL = 'http://localhost:3000';

export function fetchTodos() {
  const request = axios.get(`${URL}/todos`);

  return {
    type: FETCH_TODOS,
    payload: request
  };
}