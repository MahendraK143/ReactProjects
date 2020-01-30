import React, { Component } from 'react';
import { connect } from 'react-redux'
import employeeList from '../reducers/employeeList';
import { getManager } from '../employee/EmployeeList';
class HomePage extends Component {
    render() {
        const { employee } = this.props.employee
        return (
            <div className="container">
                <h2>Welcome {employee.ename}</h2>
                The biggest challencge in the World, to get love from the person who hurted by you!
               
            </div>

        );
    }
}

export default connect(state => ({
    employee: state.loginEmployee
}))(HomePage);