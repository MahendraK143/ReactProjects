import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Link, NavLink, withRouter } from 'react-router-dom'
// import { Link } from 'react-router';

const mapStateToProps = state => ({ ...state, employee: state.loginEmployee });


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    const { employee } = this.props.employee
    // const emp = JSON.stringify(sessionStorage.getItem("loginEmp"))
    // alert(emp.ename)
    if(!employee.ename) {
      console.log(this.props)      
      // this.props.history.push(`/login`)
    }
  }
  render() {
    const { employee } = this.props.employee
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

          <NavLink to="/">Employee Management Service</NavLink>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              {employee.ename ?
              <React.Fragment>
              <li class="nav-item active">
                <Link to="/home" className="nav-link">Home <span class="sr-only">(current)</span></Link>
              </li>
                <li class="nav-item">
                  <Link to="/employees" className="nav-link">Employees{this.isLoggedIn} <span class="sr-only">(current)</span></Link>
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
            {employee.ename ?
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
}

export default connect(
  state => ({
    employee: state.loginEmployee
  }))(withRouter(Header));