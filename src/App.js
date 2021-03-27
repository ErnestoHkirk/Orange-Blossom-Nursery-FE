import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import './App.css';
import Home from './Routes/home';

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <main>
        <Switch>
          <Route exact path={"/"} component={Home}/>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
