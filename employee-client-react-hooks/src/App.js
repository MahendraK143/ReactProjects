import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import LoginForm from './component/login/LoginForm';
import Home from './component/login/Home';
import EmployeeList from './component/employee/EmployeeList';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import loginEmployee from './component/reducers/loginEmployee';
import employeeList from './component/reducers/employeeList';
import EmployeeDetails from './component/employee/EmployeeDetails';
export const LoginContext = React.createContext()

function App() {
  const [state, dispatch] = useReducer(loginEmployee, {})
  const [empListState, empListdispatch] = useReducer(employeeList, {})
  return (
    <div>
      <LoginContext.Provider value={
        { loginEmployeeState: state, loginEmployeeDispatch: dispatch,
          employeeListState : empListState, employeeListDispatch: empListdispatch }
        } >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route path="/home" component={Home} />
            {/* <Route path="/employees/:message" component={EmployeeList} /> */}
            <Route path="/employees" component={EmployeeList} />
            {/* <Route path="/employeeRegForm/:employeeId" component={EmployeeRegForm} /> */}
            {/* <Route path="/employeeRegForm" component={EmployeeRegForm} /> */}
            <Route path="/login" component={LoginForm} />
            <Route path="/employeeDetails/:employeeId/:manager" component={EmployeeDetails} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </LoginContext.Provider>

    </div>
  );
}

export default App;
