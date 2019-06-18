import * as actionTypes from './actionTypes';

export function todosReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.payload];
    case actionTypes.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
      });
    default:
      return state;
  }
}
