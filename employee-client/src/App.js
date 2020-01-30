import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import EmployeeList from './component/employee/EmployeeList';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import LoginForm from './component/login/LoginForm';
import {store} from './component/store'
import EmployeeDetails from './component/employee/EmployeeDetails';
import HomePage from './component/login/HomePage';
import EmployeeRegForm from './component/employee/EmployeeRegForm';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route path="/home" component={HomePage} />
            <Route path="/employees/:message" component={EmployeeList} />
            <Route path="/employees" component={EmployeeList} />
            <Route path="/employeeRegForm/:employeeId" component={EmployeeRegForm} />
            <Route path="/employeeRegForm" component={EmployeeRegForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/employeeDetails/:employeeId/:manager" component={EmployeeDetails} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
