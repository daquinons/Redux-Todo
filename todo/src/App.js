import React from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Todos</h1>
        <Todos />
      </div>
    </div>
  );
}

export default App;
