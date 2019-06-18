import React from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
      </header>

      <Todos />
    </div>
  );
}

export default App;
