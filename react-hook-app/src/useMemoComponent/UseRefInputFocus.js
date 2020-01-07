import React, {useRef,useEffect} from 'react';

function UseRefInputFocus(props) {
    const inputRef = useRef(null)
    useEffect(() =>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    );
}

export default UseRefInputFocus;