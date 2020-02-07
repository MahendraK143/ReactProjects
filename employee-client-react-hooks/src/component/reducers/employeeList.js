import React from 'react'
import { SUCCESS, FAILURE } from "../ActionType";
import { useReducer } from "react";
const initialState = {
    loading: false,
    employeeList: [],
    error: []
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                loading: true,
                employeeList : action.payload
            }
        case FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const empListReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                loading: true,
                employeeList : action.payload
            }
        case FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const EmpListContext = React.createContext()

export const EmpListContextProvider = props => {
    const [state, dispatch] = useReducer(empListReducer, {})
  
    return (
      <EmpListContext.Provider value={{ employeeListState : state, employeeListDispatch : dispatch }}>
        {props.children}
      </EmpListContext.Provider>
    );
  };