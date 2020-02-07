import React from 'react';
import {Link} from 'react-router-dom'
import { getManager } from './EmployeeList';

function Employee({emp, employeeList}) {
    // const manager = emp.manager == 0 ? 'SenierManager' : getManager(employeeList, emp.manager)
    const manager = 'asdf'
    const detailsURL = '/employeeDetails/' + emp.employeeId + "/" + manager
    const updateURL = '/employeeRegForm/' + emp.employeeId
    const deleteURL = '/employeeDetails/' + emp.employeeId + "/" + manager
    return <tr>
        <td>{emp.employeeId}</td>
        <td><Link to={detailsURL}>{emp.ename}</Link></td>
        <td>{manager}</td>
        <td><Link to={updateURL}> Update </Link> | <a href="#" onClick={() => this.deleteEmployee(emp.employeeId)}>Delete</a></td>
    </tr>

}

export default Employee;