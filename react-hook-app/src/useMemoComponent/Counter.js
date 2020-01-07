import React, { useState, useMemo } from 'react';

function Counter(props) {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const incrementCountOne = () => {
        setCountOne(countOne + 1)
    }
    const incrementCountTwo = () => {
        setCountTwo(countTwo + 10)
    }
    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return countOne % 2 == 0
    }, [countOne])
    return (
        <div>
            <div>
                <button onClick={incrementCountOne}>Count One - {countOne}</button>
                <span>{isEven ? 'Event' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementCountTwo}>Count Two - {countTwo}</button>
            </div>
        </div>
    );
}

export default Counter;