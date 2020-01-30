import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure, loginUser } from '../Actions'
import Axios from 'axios';


const mapStateToProps = state => ({ ...state, employee: state.loginEmployee });

const mapDispatchToProps = dispatch => ({
    loginRequest: () => { dispatch(loginRequest()) },
    loginSuccess: (payload) => { dispatch(loginSuccess(payload)) },
    loginFailure: (error) => { dispatch(loginFailure(error)) },
    loginUser: (employee) => { dispatch(loginUser(employee)) }
})
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notAllow: true,
            isLoggedIn: false,
            username: '',
            password: ''
        }
        this.inputRef = React.createRef()
    }

    changeEmailHandler = (event) => {
        this.setState({
            username: event.target.value
        })
        if (this.state.username && this.state.password) {
            this.setState({
                notAllow: false
            })
        } else {
            this.setState({
                notAllow: true
            })
        }
    }
    changePasswordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
        if (this.state.username && this.state.password && this.state.password !== '') {
            this.setState({
                notAllow: false
            })
        } else {
            this.setState({
                notAllow: true
            })
        }
    }
    loginSubmitHandler = (e) => {
        e.preventDefault()
        // alert(this.state.username + "," + this.state.password)
        const redirectURL = `/home/${this.state.username}`
    
        let json = {
            username: this.state.username,
            password: this.state.password
        }
        // this.props.loginUser(json)
        
        this.props.loginRequest()

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
                this.props.loginSuccess(response.data)
                                this.props.history.push(`/home`)
            })
            .catch(error => {
                // alert('failure:' + error)
                if (error.message.includes(404)) {
                    this.props.loginFailure("Please enter valid credentials!")
                }
                this.props.history.push(`/login`)
            })
    }
    componentDidMount() {
        this.inputRef.current.focus()
        this.props.loginRequest()
    }
    componentDidUpdate(prevProps) {
        // alert(this.props.employee.employee)
        // alert(prevProps.employee.employee)
        // if (prevProps.employee.employee !== this.props.employee.employee) {
        //     window.location.assign(window.location.origin + "/home");
        // }
      }
    render() {
        const { employee, error } = this.props.employee
        return (

            <div class="container">
                {
                    error ? <div style={{ color: 'red' }}>{error}</div> : ''
                }
                <h2>Login {employee.ename}</h2>
                <form onSubmit={this.loginSubmitHandler}>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" class="form-control" ref={this.inputRef} value={this.state.username} onChange={this.changeEmailHandler} id="username" placeholder="Enter username" name="username" />
                        {this.state.username ? '' : <span style={{ color: 'red' }}>Please enter username</span>}
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" value={this.state.password} onChange={this.changePasswordHandler} id="pwd" placeholder="Enter password" name="pswd" />
                        {this.state.password ? '' : <span style={{ color: 'red' }}>Please enter password</span>}
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                                </label>
                    </div>
                    <button type="submit" class="btn btn-primary" disabled={this.state.username ? (this.state.password ? false : true) : true}>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);