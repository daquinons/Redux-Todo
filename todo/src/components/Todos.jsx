import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../state/actionDispatchers';

const Todos = props => {
  const todos = props.todos || [];

  return <div />;
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(Todos);
