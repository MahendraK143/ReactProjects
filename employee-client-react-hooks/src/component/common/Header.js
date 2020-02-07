import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Redirect, withRouter } from 'react-router-dom'
import { LoginContext } from '../../App';

function Header(props) {
  const loginContext = useContext(LoginContext)
  console.log(props)
  // alert(loginContext.loginEmployeeState.employee !== undefined)
  useEffect(() =>{
    const emp = JSON.parse(sessionStorage.getItem("employee"))
    console.log(emp.ename)
    if(loginContext.loginEmployeeState.employee == undefined && props.history !== undefined){
      // props.history.push('/login')
    }
  },[])
    return (
        <React.Fragment>
          
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

          <NavLink to="/">Employee Management Service</NavLink>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              {loginContext.loginEmployeeState.employee !== undefined ?
              <React.Fragment>
              <li class="nav-item active">
                <Link to="/home" className="nav-link">Home <span class="sr-only">(current)</span></Link>
              </li>
                <li class="nav-item">
                  <Link to="/employees" className="nav-link">Employees <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </React.Fragment>
                :
                ''}
              {/* <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            </ul>
            {loginContext.loginEmployeeState.employee !== undefined ?
              <Link to="/login">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
              </Link> :
              <Link to="/login">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
              </Link>}

          </div>
        </nav>
      </React.Fragment>
    );
}

export default withRouter(Header);