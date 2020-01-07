import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import UseStateForObject from './components/UseStateForObject';
import UseStateForArray from './components/UseStateForArray';
import ClassCountUseEffectsOne from './components/ClassCountUseEffectsOne';
import HookCounterEffectOne from './components/HookCounterEffectOne';
import ClassMouse from './components/ClassMouse';
import HookMouseEffect from './components/HookMouseEffect';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './useReduceComponent/ComponentC';
import CounterOne from './useReduceComponent/CounterOne';
import CounterTwo from './useReduceComponent/CounterTwo';
import ComponentA from './useReduceComponent/ComponentA';
import DataFetchingOne from './useReduceComponent/DataFetchingOne';
import DataFetchingTwo from './useReduceComponent/DataFetchingTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


// useReduce+useContext
export const CountContext = React.createContext()
const intialState = {
  firstCounter: 0,
  secondCounter: 10
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment1':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement1':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return intialState
    default:
      return state
  }
}

function App() {
  // useReduce+useContext
  const [count, dispatch] = useReducer(reducer, intialState)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        <DataFetchingTwo />
        {/* <DataFetchingOne /> */}

        {/* useReduce+useContext */}
        {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
          <div className='App'>
            Count - 
            <ComponentA />
            <ComponentC />
          </div>
        </CountContext.Provider>
         */}
        {/* <CounterTwo />
        <CounterOne /> */}

        {/* <UserContext.Provider value={'mahendra'}>
          <ChannelContext.Provider value={'java'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}


        {/* <DataFetching /> */}
        {/* <IntervalHookCounter /> */}
        {/* <IntervalClassCounter /> */}
        {/* <MouseContainer /> */}
        {/* <HookMouseEffect /> */}
        {/* <ClassMouse /> */}
        {/* <HookCounterEffectOne /> */}
        {/* <ClassCountUseEffectsOne /> */}
        {/* <UseStateForArray />
        <UseStateForObject />
        <HookCounterTwo />
        <HookCounter />
        <ClassCounter /> */}

      </header>
    </div>
  );
}

export default App;
