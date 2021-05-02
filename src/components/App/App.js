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
import Delivery from '../../Routes/delivery';
import EmployeRoute from '../../Utils/EmployeeRoute';
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
          <EmployeRoute path={"/dashboard"} component={Dashboard}/>
          <EmployeRoute path={"/customerOrder"} component={CustomerOrder}/>
          <EmployeRoute path={"/statement"} component={Statement}/>
          <EmployeRoute path={"/vendor"} component={Vendor}/>
          <EmployeRoute path={"/delivery"} component={Delivery}/>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
