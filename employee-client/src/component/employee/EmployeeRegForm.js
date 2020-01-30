import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Axios from 'axios';
import employeeList from '../reducers/employeeList';
import { number } from 'prop-types';

class EmployeeRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentList: [],
            managerList: [],
            employeeId : 0,
            ename: '',
            job: '',
            manager: '',
            hiredate: '',
            salary: '',
            department: {
                departmentId: 0
            },
            error: '',
            isValidForm: false
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:8080/employee/departments')
            .then(response => {
                this.setState({
                    departmentList: response.data
                })
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
        Axios.get('http://localhost:8080/employee/managerList')
            .then(response => {
                this.setState({
                    managerList: response.data
                })
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
        console.log(this.props)
        if (this.props.match.params.employeeId) {
            Axios.get(`http://localhost:8080/employee/${this.props.match.params.employeeId}`)
                .then(response => {
                    // alert(response.data.department.departmentName)
                    this.setState(response.data)
                    this.setState({
                        employeeId: this.props.match.params.employeeId
                    })
                })
                .catch(error => {
                    this.setState({ error: error })
                })
        }
    }
    fieldChangeHandler = e => {
        console.log(e.target.name + "----" + e.target.value)
        this.setState({
            ename: e.target.name == 'ename' ? e.target.value : this.state.ename,
            job: e.target.name == 'job' ? e.target.value : this.state.job,
            manager: e.target.name == 'manager' ? e.target.value : this.state.manager,
            hiredate: e.target.name == 'hiredate' ? e.target.value : this.state.hiredate,
            salary: e.target.name == 'salary' ? e.target.value : this.state.salary,
            department: {
                departmentId: e.target.name == 'departmentId' ? e.target.value : this.state.departmentId
            }
        })
        this.isValidForm()
    }
    isValidForm = () => {
        if (this.state.ename && this.state.job && this.state.manager && this.state.hiredate &&
            this.state.salary && this.state.department.departmentId) {
            this.setState({
                isValidForm: true
            })
        } else {
            this.setState({
                isValidForm: false
            })
        }

    }
    employeeReg = e => {
        e.preventDefault()
        Axios({
            headers: {
                'content-type': 'application/json'
            },
            method: 'post',
            url: this.state.employeeId == 0 ? `http://localhost:8080/employee/save` : `http://localhost:8080/employee/update`,
            data: JSON.stringify(this.state)
        })
            .then(response => {
                alert('success:' + response.data.message)
                // this.props.loginSuccess(response.data)
                const path = '/employees/' + response.data.message
                // this.props.history.push(path)
                this.props.history.push({ pathname: "/employees", search: "?message=" + response.data.message });
            })
            .catch(error => {
                console.log('failure:' + error)
                if (error.message.includes(404)) {
                    // this.props.loginFailure("Please enter valid credentials!")
                    this.setState({
                        error: error.message
                    })
                } else if (error.message.includes(302)) {
                    this.setState({
                        error: this.state.ename + ' Employee already existed!'
                    })
                }
                // this.props.history.push(`/login`)
            })
    }
    getManagerName = (empId) => {
        const { managerList } = this.state
        for (let i = 0; managerList.length > i; i++) {
            if (managerList[i].employeeId == empId) {
                return managerList[i].ename
            }
        }
    }
    getDeptName = (deptId) =>{
        const { departmentList } = this.state
        for (let i = 0; departmentList.length > i; i++) {
            if (departmentList[i].departmentId == deptId) {
                return departmentList[i].departmentName
            }
        }
    }
    render() {
        const { departmentList, managerList, error } = this.state
        const managerName =  this.getManagerName(this.state.manager)
        const departmentName =  this.getDeptName(this.state.department.departmentId)
        return (
            <div class="container">
                <h2>Employee Reg.form</h2>
                {
                    error ? <div style={{ color: 'red' }}>{error}</div> : ''
                }
                <form onSubmit={this.employeeReg}>
                    <table class="table" onMouseMove={this.isValidForm}>
                        <tr>
                            <td>
                                <div class="form-group">
                                    <label for="ename">name:</label>
                                    <input type="text" class="form-control" ref={this.inputRef} value={this.state.ename} onChange={this.fieldChangeHandler} id="ename" placeholder="Enter name" name="ename" />
                                    {this.state.ename ? '' : <span style={{ color: 'red' }}>Please enter name</span>}
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <label for="job">Job:</label>
                                    <input type="text" class="form-control" value={this.state.job} onChange={this.fieldChangeHandler} id="job" placeholder="Enter job" name="job" />
                                    {this.state.job ? '' : <span style={{ color: 'red' }}>Please enter job</span>}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-group">
                                    <label for="manager">Manager:</label>
                                    <select class="form-control" onChange={this.fieldChangeHandler} id="manager" name="manager" >
                                        {
                                            this.state.manager ? <option value={this.state.manager} selected>{managerName}</option> : ''
                                        }
                                        <option value=''>select emp manager</option>
                                        {
                                            managerList.map(emp => {
                                                return (<React.Fragment>
                                                    {this.state.manager != emp.employeeId ? <option value={emp.employeeId}>{emp.ename}</option>: ''}
                                                </React.Fragment>)
                                            })
                                        }
                                    </select>
                                    {this.state.manager ? '' : <span style={{ color: 'red' }}>Please select manager</span>}
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <label for="hiredate">Hiredate:</label>
                                    <input type="date" class="form-control" value={this.state.hiredate}
                                        onChange={this.fieldChangeHandler} onClick={this.fieldChangeHandler}
                                        id="hiredate" placeholder="Enter hiredate" name="hiredate" />
                                    {this.state.hiredate ? '' : <span style={{ color: 'red' }}>Please enter hiredate</span>}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-group">
                                    <label for="salary">Salary:</label>
                                    <input type="number" class="form-control" value={this.state.salary} onChange={this.fieldChangeHandler}
                                        id="salary" placeholder="Enter hiredate" name="salary" />
                                    {this.state.salary ? '' : <span style={{ color: 'red' }}>Please enter salary</span>}
                                </div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <label for="departmentId">Department:</label>
                                    <select class="form-control" onChange={this.fieldChangeHandler} onClick={this.fieldChangeHandler}
                                        id="departmentId" name="departmentId" >
                                        {
                                            this.state.department.departmentId ? <option value={this.state.department.departmentId} selected>{departmentName}</option> : ''
                                        }
                                        <option value=''>select emp department</option>
                                        {
                                            departmentList.map(dept => {
                                                return <React.Fragment>{
                                                    this.state.department.departmentId != dept.departmentId ? <option value={dept.departmentId}>{dept.departmentName}</option> : ''
                                                }</React.Fragment>
                                            })
                                        }
                                    </select>
                                    {this.state.department.departmentId ? '' : <span style={{ color: 'red' }}>Please select department</span>}
                                </div>
                            </td>
                        </tr>
                    </table>
                    {/* <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" value={this.state.password} onChange={this.changePasswordHandler} id="pwd" placeholder="Enter password" name="pswd" />
                        {this.state.password ? '' : <span style={{ color: 'red' }}>Please enter password</span>}
                    </div> */}

                    <button type="submit" class="btn btn-primary" disabled={this.state.isValidForm ? false : true}>Register</button>
                </form>
            </div>
        );
    }
}


export default EmployeeRegForm;