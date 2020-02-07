import React, { useEffect, useContext, useState } from 'react';
import Fuse from 'fuse.js'
import Axios from 'axios';
import { LoginContext } from '../../App';
import { Link } from 'react-router-dom'
import { getEmployeeListSuccess, getEmployeeListFailure } from '../Actions';
import Employee from './Employee';
import Home from '../login/Home';

export const getManager = (employeeList, id) => {
    if(employeeList !== undefined)
    for (let i = 0; employeeList.length - 1 > 0; i++) {
        if (employeeList[i].employeeId == id) {
            return employeeList[i].ename
        }
    }
}

function EmployeeList(props) {
    const [empList, setEmpList] = useState({})
    const [searchText, setSearchText] = useState('')
    const loginContext = useContext(LoginContext)
    const employeeList = loginContext.employeeListState.employeeList
    // setEmpList(employeeList)
    var options = {
        caseSensitive: true,
        shouldSort: true,
        findAllMatches: true,
        includeScore: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: NaN,
        keys: [
          "ename"
        ]
      };
    // setEmpList(employeeList)
    console.log(loginContext.employeeListState.isLoading)
    useEffect(() => {
        // filterEmployeesBySearchText(searchText)
        if (employeeList == undefined)
            Axios.get('http://localhost:8080/employee/list')
                .then(response => {
                    loginContext.employeeListDispatch(getEmployeeListSuccess(response.data))
                    sessionStorage.setItem("EmpList", JSON.stringify(response.data))
                    setEmpList(response.data)
                })
                .catch(error => {
                    loginContext.employeeListDispatch(getEmployeeListFailure(error.message))
                })
    }, [searchText])
    console.log(props)
    const filterEmployeesBySearchText = (searchText) => {
        setSearchText(searchText)
        if (employeeList !== undefined)
            setEmpList(employeeList.map(emp => {
                console.log(emp.ename.toLowerCase())
                console.log(emp.ename.toLowerCase().includes(searchText))
                if (emp.ename.toLowerCase().includes(searchText.toLowerCase())) {
                    return emp;
                }
            }))

        // const fuse = new Fuse(employeeList, options)
        // var list = fuse.search(searchText)
        // setEmpList(fuse.search(searchText))
        // console.log(list)
    }
    console.log(empList[0] && empList[0].item ?empList[0].item.ename:'empty')
    return (

        <div class="container" >
            <h2>List Of Employees </h2>
            <Home></Home>

            <input type="text" name="searchText" value={searchText} onChange={e => filterEmployeesBySearchText(e.target.value)} ></input>
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

                        (empList !== undefined && empList.length > 0) ?
                            empList.map(emp => {
                                if (emp !== undefined) {
                                    return <Employee emp={emp} employeeList={employeeList}/>
                                }

                            }) : employeeList !== undefined ?
                                employeeList.map(emp => {
                                    return <Employee emp={emp} employeeList={employeeList}/>
                                }) : ''
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;
