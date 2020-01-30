import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { connect } from 'react-redux'
import Axios from 'axios';
import mahendraImage from '../../images/mahendra.jpg'
import { getEmployeeListSuccess, getEmployeeListFailure } from '../Actions';

// const mapDispatchToProps = dispatch => ({
//     getEmployeeListSuccess: (payload) => { dispatch(getEmployeeListSuccess(payload)) },
//     getEmployeeListFailure: (error) => { dispatch(getEmployeeListFailure(error)) }
// })

export const getManager = (employeeList, id) => {
    for (let i = 0; employeeList.length - 1 > 0; i++) {
        if (employeeList[i].employeeId == id) {
            return employeeList[i].ename
        }
    }
}
class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        // alert('componentDidMount')
        // alert(this.props.match.params.message)
        // console.log(this.props.location.search)
        console.log("componentDidMount" + this.props)
        // console.log(this.props)

        Axios.get('http://localhost:8080/employee/list')
            .then(response => {
                // alert('success' + response.data[0].ename)
                this.props.dispatch(getEmployeeListSuccess(response.data))
                sessionStorage.setItem('employeeList', JSON.stringify(response.data))
            })
            .catch(error => {
                this.setState({
                    message: error
                })
                this.props.dispatch(getEmployeeListFailure(error.message))
            })
        let url = this.props.location.search;
        let params = queryString.parse(url);
        console.log(params.message);
        if (params.message) {
            this.setState({
                message: this.state.message + params.message
            })
        }

    }
    newEmployeeRegFormHandler = () => {
        this.props.history.push(`/employeeRegForm`)
    }
    deleteEmployee = (employeeId) => {
        Axios.delete(`http://localhost:8080/employee/delete/${employeeId}`)
            .then(response => {
                alert('success' + response.data)
                this.setState({
                    message: response.data
                })
            })
            .catch(error => {
                alert('success' + error)
                this.setState({
                    message: error
                })
            })
        // setTimeout(window.location.reload(),3000)
    }
    reloadPage = () => {
        this.props.history.push(`employees`)
    }
    render() {
        const { employeeList } = this.props.employeeList
        return (
            <div class="container" >
                <h2>List Of Employees</h2>
                {
                    this.state.message ? <div style={{ color: 'red' }}>{this.state.message}</div> : ''
                }
                <button onClick={this.newEmployeeRegFormHandler} className='btn-primary' style={{ marginRight: '0px', float: "right" }}>New Employee</button>
                <button onClick={this.reloadPage} className='btn-primary' style={{ marginRight: '0px', float: "right" }}>Re-Load</button>
                {/* {
                    employeeList.map(emp => {
                        return <div class="containerImage">
                            <img src={mahendraImage} alt="Avatar" style={{ width: '90px' }}></img>
                            <p><span>{emp.ename}.</span> {emp.job} at Mercedes-Benz.</p>
                            <p>John Doe saved us from a web disaster.</p>
                        </div>
                    })
                } */}


                <table class="table">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Name</th>
                            <th>Manager</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeeList.map(emp => {
                                const manager = emp.manager == 0 ? 'SenierManager' : this.props.getManager(employeeList, emp.manager)
                                const detailsURL = '/employeeDetails/' + emp.employeeId + "/" + manager
                                const updateURL = '/employeeRegForm/' + emp.employeeId
                                const deleteURL = '/employeeDetails/' + emp.employeeId + "/" + manager
                                return <tr>
                                    <td>{emp.employeeId}</td>
                                    <td><Link to={detailsURL}>{emp.ename}</Link></td>
                                    <td>{manager}</td>
                                    <td><Link to={updateURL}> Update </Link> | <a href="#" onClick={() => this.deleteEmployee(emp.employeeId)}>Delete</a></td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(state => ({
    getManager: getManager,
    employeeList: state.employeeList,
    getEmployeeListSuccess: state.getEmployeeListSuccess,
    getEmployeeListFailure: state.getEmployeeListFailure
}))(withRouter(EmployeeList));