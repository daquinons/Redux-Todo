import React from 'react';
import { connect } from 'react-redux';
import * as actionDispatchers from '../state/actionDispatchers';

const AddTodoForm = (props) => {
  const inputRef = React.createRef();

  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <form>
      <input ref={inputRef} type="text" name="" id="" placeholder="Todo" />
      <button type="submit" onClick={handleSubmit} >Create Todo</button>
    </form>
  )
}

export default connect(
  undefined,
  { addTodo: actionDispatchers.addTodo }
)(AddTodoForm);