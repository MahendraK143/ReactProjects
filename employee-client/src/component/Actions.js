import { LOADING, lOGIN_SUCCESS, lOGIN_FAILURE, FAILURE, SUCCESS } from './ActionType'
import axios from 'axios'
import Axios from 'axios'
const BASE_URL = "http://localhost:8080/employee"
export const loginRequest = () => {
    return {
        type: LOADING,
        loading: false,
        payload: [],
        error: []
    }
}
export const loginSuccess = (employee) => {
    return {
        type: lOGIN_SUCCESS,
        loading: true,
        payload: employee,
        error: [],
    }
}
export const loginFailure = (error) => {
    return {
        type: lOGIN_FAILURE,
        loading: false,
        payload: [],
        error: error,
    }
}

export const getEmployeeListSuccess = (employee) => {
    return {
        type: SUCCESS,
        loading: true,
        payload: employee,
        error: [],
    }
}
export const getEmployeeListFailure = (error) => {
    return {
        type: FAILURE,
        loading: false,
        payload: [],
        error: error,
    }
}


export const loginUser = (employee) => {
    alert(employee.username)
    let json = {
        username: 'Mahendra',
        password: 'mahendra'
    }
    return (dispatch) => {
        // dispatch(loginRequest)
        Axios({
            headers: {
                'content-type': 'application/json'
            },
            method: 'post',
            url: `http://localhost:8080/employee/login1`,
            params: employee
        })
            .then(response => {
                // alert('success:'+response.data.ename)
                const emp = response.data
                dispatch(loginSuccess(emp))
                sessionStorage.setItem("loginEmp",JSON.parse(emp))
                // this.props.history.push(`/home`)
            })
            .catch(error => {
                // alert('failure:' + error)
                const err = error.message
                if (error.message.includes(404)) {
                    dispatch(loginFailure("Please enter valid credentials!"))
                }
                // this.props.history.push(`/login`)
            })
    }
}