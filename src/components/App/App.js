import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/navigation';
import Home from '../../Routes/home';
import Login from '../../Routes/login';
import Register from '../../Routes/register';
import Dashboard from '../../Routes/dashboard';
import CustomerOrder from '../../Routes/customer-order';
import Statement from '../../Routes/statement';
import Vendor from '../../Routes/vender-order';
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
          <Route path={"/statement"} component={Statement}/>
          <Route path={"/vendor"} component={Vendor}/>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
