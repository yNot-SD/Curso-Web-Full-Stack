import React from 'react';
import Header from './Header.js'
import './App.css';

function App() {
  return (
    <Header name="yNot" links={['About', 'Buy', 'Contact', 'Login']}></Header>
  );
}

export default App;
