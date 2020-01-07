import React, { useState } from 'react';
import useInput from '../hooks/useInput';

function UserForm(props) {
    const [firstname, bindFirstname, resetFirstname] = useInput('')
    const [lastname, bindLastname, resetLastname] = useInput('')
    const formSubmit = e =>{
        e.preventDefault()
        alert(firstname + lastname)
        resetFirstname()
        resetLastname()
    }
    

    return (
        <div>
            <form onSubmit={formSubmit}>
            <input type="text" value={firstname} {...bindFirstname} />
            <input type="text" value={lastname} {...bindLastname} />
            <button >Submit</button>
            </form>
        </div>
    );
}

export default UserForm;