import React,{useContext} from 'react';
import {CountContext} from '../App'

function ComponentC(props) {
    const countContext = useContext(CountContext)
    return (
        <div>
            <button onClick = { () => countContext.countDispatch({type : 'reset'})}>Reset</button>
            <button onClick = { () => countContext.countDispatch({type : 'increment', value: 5})}>Incement</button>
            <button onClick = { () => countContext.countDispatch({type : 'decrement', value: 5})}>Decrement</button>
            <button onClick = { () => countContext.countDispatch({type : 'increment1', value: 5})}>Incement1</button>
            <button onClick = { () => countContext.countDispatch({type : 'decrement1', value: 5})}>Decrement1</button>
            ComponentC
        </div>
    );
}

export default ComponentC;