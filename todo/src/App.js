import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>To Do:</h1>
        <AddTodoForm />
        <Todos />
      </div>
    </div>
  );
}

export default App;
