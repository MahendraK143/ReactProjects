import React from 'react';
import useCounter from '../hooks/useCounter';

function CounterTwo(props) {
    const [count, incrementCount, decrementCount, reset] = useCounter(100, 5000)
    return (
        <div>
            Count - {count} <br/>
            <button onClick={incrementCount}>Incement Count</button>
            <button onClick={decrementCount}>Decrement Count</button>
            <button onClick={reset}>Reset Count</button>
        </div>
    );
}

export default CounterTwo;