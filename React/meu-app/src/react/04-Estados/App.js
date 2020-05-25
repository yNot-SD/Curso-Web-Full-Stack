import React from 'react';
import Header from './Header.js'
import Counter from './Counter'
import './App.css';

function App() {
  return (
    <div>
      <Header name="yNot" links={['About', 'Buy', 'Contact', 'Login']}></Header>
      <Counter count={0}></Counter>
    </div>
  );
}

export default App;
