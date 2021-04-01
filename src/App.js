import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import Home from './Routes/home';
import Login from './Routes/login';
import Register from './Routes/register';
import Dashboard from './Routes/dashboard';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <main>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/login"} component={Login}/>
          <Route path={"/register"} component={Register}/>
          <Route path={"/dashboard"} component={Dashboard}/>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
