import React from 'react'

function FunctionClick(){
    function clickHandler(){
        alert("clicked"); 
    }
    return (
    <div>
        <button onMouseEnter={clickHandler}>click</button>
    </div>
    )
}

export default FunctionClick;
