import React from 'react';
import { connect } from 'react-redux';
import * as actionDispatchers from '../state/actionDispatchers';
import Todo from './Todo';

const Todos = props => {
  const todos = props.todos || [];
  return todos.map(todo => {
    return (
      <div key={todo.id}>
        <Todo
          id={todo.id}
          value={todo.value}
          completed={todo.completed}
          toggleTodo={props.toggleTodo}
          deleteTodo={props.deleteTodo}
        />
      </div>
    );
  });
};

function mapStateToProps(state) {
  return {
    todos: state
  };
}

export default connect(
  mapStateToProps,
  { toggleTodo: actionDispatchers.toggleTodo, deleteTodo: actionDispatchers.deleteTodo }
)(Todos);
