import React, { useState } from 'react';

function useCounter(initialCounter, value) {

    const [count, setCount] = useState(initialCounter)
    const incrementCount = () => {
        setCount(count + value)
    }
    const decrementCount = () => {
        setCount(count - value)
    }
    const reset = () => {
        setCount(initialCounter)
    }

    return [count, incrementCount, decrementCount, reset]
}

export default useCounter;