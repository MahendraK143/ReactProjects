import React, {useState, useEffect} from 'react';

function HookMouseEffect(props) {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = e =>{
        setX(e.clientX)
        setY(e.clientY)
        document.title = `${x}-${y}`
    }
    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)
        // here return will work as componentWillUnmount
        return () =>{
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            X - {x} Y - {y}
        </div>
    );
}

export default HookMouseEffect;