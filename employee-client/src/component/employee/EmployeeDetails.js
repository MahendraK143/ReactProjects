import React, { Component } from 'react';
import { connect } from 'react-redux'
import mahendraImage from '../../images/mahendra.jpg'
import Axios from 'axios';
import { getManager } from './EmployeeList';
import employeeList from '../reducers/employeeList';

class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            department: [],
            employee: [],
            error: '',
            manager: ''
        }
    }

    componentDidMount() {
        const empId = this.props.match.params.employeeId
        console.log(this.props)
        this.setState({
            manager: this.props.match.params.manager
        })
        Axios.get(`http://localhost:8080/employee/${empId}`)
            .then(response => {
                // alert(response.data.department.departmentName)
                this.setState({
                    employee: response.data,
                    department: response.data.department
                })
            })
            .catch(error => {
                this.setState({ error: error })
            })
    }

    render() {
        const { employee, department, manager } = this.state
        // const { employeeList } = this.props.employeeList
        // const managers = []
        // employeeList.map(emp =>{
        //     managers.push(emp)
        // })
        // alert(managers.length+managers[0].ename)
        // const manager1 = employee.manager == 0 ? 'SenierManager' : getManager(managers, employee.manager)
        return (
            <React.Fragment>
                <div class="container">
                    <img src={mahendraImage} alt="Avatar" style={{ width: '90px' }}></img>
                    <p><span>{employee.ename}.</span> {employee.job} at Mercedes-Benz.</p>
                    <p>Department of. {department.departmentName} </p>
                    <p>Locatoin :{department.location}</p>
                    <p>HireDate: {employee.hiredate}</p>
                    <p>Manager: {manager}</p>
                    <p>Salary: {employee.salary}</p>
                    <button onClick={() => this.props.history.goBack()} className="cancelbtn">Back</button>
                </div>

            </React.Fragment>
        );
    }
}

export default connect(state => ({
    employeeList: state.employeeList
}))(EmployeeDetails);