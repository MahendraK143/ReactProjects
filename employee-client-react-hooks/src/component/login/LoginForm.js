import React, { useState, useRef, useEffect, useReducer, useContext } from 'react';
import Axios from 'axios';
import loginEmployee from '../reducers/loginEmployee';
import { loginSuccess, loginFailure } from '../Actions';
import { LoginContext } from '../../App';


function LoginForm(props) {
    
    const loginContext = useContext(LoginContext)
    
    const [state, dispatch] = useReducer(loginEmployee,{})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const loginSubmitHandler = (event) =>{
        event.preventDefault()
        let json = {
            username: username,
            password: password
        }
        // alert(json)
        Axios({
            headers: {
                'content-type': 'application/json'
            },
            method: 'post',
            url: `http://localhost:8080/employee/login1`,
            params: json
        })
            .then(response => {
                // alert('success:'+response.data.ename)
                // dispatch(loginSuccess(response.data))
                loginContext.loginEmployeeDispatch(loginSuccess(response.data))
                sessionStorage.setItem("employee", JSON.stringify(response.data))
                props.history.push(`/home`)
            })
            .catch(error => {
                // alert('failure:' + error)
                if (error.message.includes(404)) {
                    // dispatch(loginFailure("Please enter valid credentials!"))
                    loginContext.loginEmployeeDispatch(loginFailure('Please enter valid credentials!'))
                }
                props.history.push(`/login`)
            })
    }
    return (
        
        <div class="container">

            <h2>Login </h2>
            {
                state.error ? <div style={{ color: 'red' }}>{state.error}</div> : ''
            }
            {
                loginContext.loginEmployeeState.error ? <div style={{ color: 'red' }}>{loginContext.loginEmployeeState.error}</div> : ''
            }
            <form onSubmit={loginSubmitHandler}>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" class="form-control" ref={inputRef} value={username} onChange={e => setUsername(e.target.value)} id="username" placeholder="Enter username" name="username" />
                    {username && username !== '' ? '' : <span style={{ color: 'red' }}>Please enter username</span>}
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} id="pwd" placeholder="Enter password" name="pswd" />
                    {password ? '' : <span style={{ color: 'red' }}>Please enter password</span>}
                </div>
                <div class="form-group form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                                </label>
                </div>
                <button type="submit" class="btn btn-primary" disabled={username ? (password ? false : true) : true}>Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;