import React, { useContext } from 'react';
import { LoginContext } from '../../App';

function Home(props) {
    const loginContext = useContext(LoginContext)
    const { employee } = loginContext.loginEmployeeState
    const emp = JSON.parse(sessionStorage.getItem("employee"))
    console.log(emp.ename)
    return (
        <div>
            Home {employee !== undefined ? employee.ename : ''} session {emp.ename}
        </div>
    );
}

export default Home;