import React, { useEffect, useState, useContext } from 'react';
import mahendraImage from '../../images/mahendra.jpg'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { EmpListContext, EmpListContextProvider } from '../reducers/employeeList';
import { getManager } from './EmployeeList';
import { LoginContext } from '../../App';

function EmployeeDetails(props) {
    // const loginContext = useContext(LoginContext)
    // const employeeList = loginContext.employeeListState.employeeList
    // console.log(employeeList)
    const [error, setError] = useState('')
    const [manager, setManager] = useState('')
    const [employee, setEmployee] = useState({})
    const [department, setDepartment] = useState({})
    const EmpList = JSON.parse(sessionStorage.getItem("EmpList"))
    useEffect(() => {
        
        const empId = props.match.params.employeeId
        console.log(props)
        setManager(props.match.params.manager)
        Axios.get(`http://localhost:8080/employee/${empId}`)
            .then(response => {
                // alert(response.data.department.departmentName)
                setEmployee(response.data)
                setDepartment(response.data.department)
            })
            .catch(error => {
                setError(error)
            })
    }, [])
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
                <button onClick={() => props.history.goBack()} className="cancelbtn">Back</button>
            </div>
            {/* {
                EmpList != undefined ? 
                EmpList.map(emp => {
                    return <div>{emp.ename}</div>
                })
                :''
            } */}
            {/* <EmpListContextProvider>
                <Details />
            </EmpListContextProvider> */}
        </React.Fragment>
    );
}

export default EmployeeDetails;


// export const Details = (props) => {
//     const empListContext = useContext(EmpListContext)
//     const employeeList = empListContext.employeeListState.employeeList
//     console.log(employeeList)
//     return (
//         <div>
//             <table class="table">
//                 <thead>
//                     <tr>
//                         <th>Employee Id</th>
//                         <th>Name</th>
//                         <th>Manager</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         employeeList !== undefined ? employeeList.map(emp => {
//                             const manager = emp.manager == 0 ? 'SenierManager' : getManager(employeeList, emp.manager)
//                             const detailsURL = '/employeeDetails/' + emp.employeeId + "/" + manager
//                             const updateURL = '/employeeRegForm/' + emp.employeeId
//                             const deleteURL = '/employeeDetails/' + emp.employeeId + "/" + manager
//                             return <tr>
//                                 <td>{emp.employeeId}</td>
//                                 <td><Link to={detailsURL}>{emp.ename}</Link></td>
//                                 <td>{manager}</td>
//                                 <td><Link to={updateURL}> Update </Link> | <a href="#" onClick={() => this.deleteEmployee(emp.employeeId)}>Delete</a></td>
//                             </tr>
//                         }) : ''
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// }
