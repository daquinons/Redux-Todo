import * as actionTypes from './actionTypes';
import uuid from 'uuid';

export const addTodo = value => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: uuid(),
      value,
      completed: false
    }
  };
};

export const toggleTodo = id => {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: id
  };
};
