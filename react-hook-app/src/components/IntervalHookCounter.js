import React, {useState, useEffect} from 'react';

function IntervalHookCounter(props) {
    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)
    //     return () => {clearInterval(interval)}
    // }, [])

    useEffect(() => {
        function doSomething() {
            console.log(props.okay)
        }
        doSomething()
        const interval = setInterval(tick, 1000)
        return () => {clearInterval(interval)}
    }, [props.okay])
    const tick = () =>{
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            {count}
        </div>
    );
}

export default IntervalHookCounter;