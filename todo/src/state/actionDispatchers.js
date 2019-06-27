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

export const deleteTodo = id => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: id
  }
}

export const toggleTodo = id => {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: id
  };
};
