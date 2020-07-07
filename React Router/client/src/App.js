import React from 'react';
import './App.css';

import Nav from './components/Nav'
import Aulas from './components/Aulas';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Aula from './components/Aula'
import Assistir from './components/Assistir'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>

          <Route path="/sobre">
            <Sobre />
          </Route>

          <Route path="/aulas/:id">
            <Aula />
          </Route>

          <Route path="/aulas/">
            <Aulas />
          </Route>

          <Route path="/assistir">
            <Assistir/>
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Route path="*">
            <div>Essa rota não existe</div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
