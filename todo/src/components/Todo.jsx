import React from 'react';

const Todo = props => {
  const toggleTodo = () => {
    props.toggleTodo(props.id);
  }

  return (
    <div>
      <p>
        <CheckBox isChecked={props.completed} handleChecked={toggleTodo}/>
        {props.value}
      </p>
    </div>
  );
};

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: this.props.isChecked };
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox
  }

  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
    this.props.handleChecked();
  }

  render() {
    return (
      <>
        <input type="checkbox" onChange={this.handleChecked} />
      </>
    );
  }
}

export default Todo;
