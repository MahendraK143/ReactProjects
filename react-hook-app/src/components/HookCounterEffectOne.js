import React, {useState, useEffect} from 'react';

function HookCounterEffectOne(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('m')

    useEffect((prevState) => {
        document.title = `${name} You clicked ${count} times`
    }, [name])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)} >You clicked {count} times</button>
        </div>
    );
}

export default HookCounterEffectOne;