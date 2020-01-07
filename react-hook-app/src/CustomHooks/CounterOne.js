import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';

function CounterOne(props) {
    const [count, incrementCount, decrementCount, reset] = useCounter(5, 100)
    return (
        <div>
            Count - {count} <br/>
            <button onClick={incrementCount}>Incement Count</button>
            <button onClick={decrementCount}>Decrement Count</button>
            <button onClick={reset}>Reset Count</button>
        </div>
    );
}

export default CounterOne;