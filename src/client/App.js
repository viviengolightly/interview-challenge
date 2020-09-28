import React from 'react';
import './App.css';

// Components
import ItemsContainer from './components/ItemsContainer.js';

function App() {
  return (
    <div 
      className="App"
      data-test="app"
    >
      <ItemsContainer />
    </div>
  );
}

export default App;
