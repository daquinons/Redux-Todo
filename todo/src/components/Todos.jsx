import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../state/actionDispatchers';
import Todo from './Todo';

const Todos = props => {
  const todos = props.todos || [];

  return todos.map(todo => {
    return <Todo value={todo.value} completed={todo.completed} />
  })
};

function mapStateToProps(state) {
  return {
    todos: state
  };
}

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(Todos);
