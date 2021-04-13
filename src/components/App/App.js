import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/navigation';
import Home from '../../routes/home';
import Login from '../../routes/login';
import Register from '../../routes/register';
import Dashboard from '../../routes/dashboard';
import CustomerOrder from '../../routes/customer-order';
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
          <Route path={"/customerOrder"} component={CustomerOrder}/>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
