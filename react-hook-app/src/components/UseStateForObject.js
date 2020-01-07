import React, {useState} from 'react';

function UseStateForObject(props) {
    const [name, setName] = useState({firstname : '', lastname : ''})
    return (
        <div>
            <input type="text" name='firstname' 
            value={name.firstname} 
            onChange={e => setName({...name, firstname : e.target.value})} /><br />
            <input type="text" name='lastname' 
            value={name.lastname} 
            onChange={e => setName({...name, lastname : e.target.value})} /><br />
            firstname : {name.firstname} <br />
            lastname : {name.lastname}
            {JSON.stringify(name)}
        </div>
    );
}

export default UseStateForObject;