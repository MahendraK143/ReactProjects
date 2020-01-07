import React, {useState} from 'react';

function HookCounterTwo(props) {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

   const incrementFive = () =>{
        for(let i = 1 ; i <= 5 ; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count : {count} <br></br>
            <button onClick={() => setCount(initialCount)}>Reset Count</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement Count</button>
            <button onClick={incrementFive}>Increment 5 Count</button>
        </div>
    );
}

export default HookCounterTwo;