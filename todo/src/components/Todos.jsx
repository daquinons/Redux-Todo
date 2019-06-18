import React from 'react';
import { connect } from 'react-redux';
import * as actionDispatchers from '../state/actionDispatchers';
import Todo from './Todo';

const Todos = props => {
  const todos = props.todos || [];

  return todos.map(todo => {
    return <Todo id={todo.id} value={todo.value} completed={todo.completed} toggleTodo={props.toggleTodo} />
  })
};

function mapStateToProps(state) {
  return {
    todos: state
  };
}

export default connect(
  mapStateToProps,
  { addTodo: actionDispatchers.addTodo, toggleTodo: actionDispatchers.toggleTodo }
)(Todos);
