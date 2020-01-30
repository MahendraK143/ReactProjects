import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginEmployee from './reducers/loginEmployee'
import employeeList from './reducers/employeeList'
export default combineReducers({
    loginEmployee,
    employeeList,
    router: routerReducer
  });
  