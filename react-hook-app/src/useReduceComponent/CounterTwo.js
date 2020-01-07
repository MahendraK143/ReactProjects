import React,{useReducer} from 'react';

const intialState = {
    firstCounter : 0,
    secondCounter : 10
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment' :
            return {...state, firstCounter : state.firstCounter + action.value}
        case 'decrement' :
            return {...state, firstCounter : state.firstCounter - action.value}
        case 'increment1' :
            return {...state, secondCounter : state.secondCounter + action.value}
        case 'decrement1' :
            return {...state, secondCounter : state.secondCounter - action.value}
        case 'reset' :
            return intialState
        default :
            return state
    }
}
function CounterTwo(props) {
    const [count, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <div>Count : {count.firstCounter}</div>
            <div>Count : {count.secondCounter}</div>
            <button onClick = { () => dispatch({type : 'reset'})}>Reset</button>
            <button onClick = { () => dispatch({type : 'increment', value: 5})}>Incement</button>
            <button onClick = { () => dispatch({type : 'decrement', value: 5})}>Decrement</button>
            <button onClick = { () => dispatch({type : 'increment1', value: 5})}>Incement1</button>
            <button onClick = { () => dispatch({type : 'decrement1', value: 5})}>Decrement1</button>
        </div>
    );
}

export default CounterTwo;