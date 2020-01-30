# ReactProjects
ReactJS:
-----------
1. npx
npx create-react-app project_name
npx package runner

2. using npm
npm install create-react-app -g


npm run build
npm run start

Http:
axios: npm install axios

React Hooks:
-------------
new feature 16.8
which is allow to write React features w/o having to write class
Ex: state of compoment
Hooks doesnt work inside classes.

useState:
const initialCount = 0
const [count, setCount] = useState(initialCount)

useState for objects:
----------------------
const [name, setName] = useState({firstname : '', lastname : ''})
onChange={e => setName({...name, firstname : e.target.value})}

useState for arrays:
---------------------
const [items, setItem] = useState([])
setItem([...items, {
            id : items.length,
            value : Math.round(Math.random() * 10) + 1
        }])
		
useEffect: it runs after render of the component, this is same like as componentDidMount
---------------
useEffect(() => {
        document.title = `You clicked ${count} times`
    })		

Conditionallly run effects:
---------------------------
 useEffect((prevState) => {
        document.title = `${name} You clicked ${count} times`
    }, [name])
	
useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)
    }, [])
here we are passing empty [] means ... it will exe only once

useContext:
-----------
there is no any change while creating context and producer context
example:
--------
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

<UserContext.Provider value={'mahendra'}>
          <ChannelContext.Provider value={'java'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>
		
there is a change while consuming context we can use react hook for more easier way

import React, {useContext} from 'react';
import ComponentF from './ComponentF';
import {UserContext, ChannelContext} from '../App'

function ComponentE(props) {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
	 return (
        <div>
                {user} - {channel}
        </div>
    );
}

export default ComponentE;

4 useReducer
---------------
is a hook that is used for state management(local state management and global state management using useContext).
useReducer is alternative to useState.
useState is built using useReducer

small example:
const arr = [1,2,3,4];
const reduce = (accumulator, currentValue) => accumulator + currentValue;

console.log(arr.reduce(reduce); // addition of all arrays values
console.log(arr.reduce(reduce, 5) // additin of all values with initial value of 5, so here 5 is the initial value

diff useState Vs useReducer
---------------------------
Type of state : useState is better for Number, String, Boolean types, useReducer is better for Arrays and Object
No of state Transitions : one or two(set methods) means useState is bettor, Too many means bettor to go for useReducer
Bussiness Logic: no business login in useState, Complex business login in useReducer
loval vs global: local, global

React.memo - useCallback: 
-----------
Useally if we have parent and child component relationship. if there is any change in parent component all the remaining child compoments will render.
So to avoid this problem if we use React.momo while exporting perticular component. This means it will allow to render a compoment if there is any change related to that component.
ex: export defailt React.momo(Component_name)

But this will work upto some point, if we are managing relationship between parent and chaild for functions might be still we can see it will rendering multiple times. we can avoid this problem by using useCallback Hooks

useCallback:
-------------
useCallback is a hook that will return memorized version of the callback function that only changes if one of the dependencies has changes.
it is usefull when passing callbacks to optimized child compoments that rely on refference equality to prevent unnecessary renders

import React, {useState, useCallback} from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent(props) {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    const incrementAge = useCallback(() =>{
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary]) 
    return (
        <div>
            <Title />
            <Count text = "Age" count= {age} />
            <Button handleClick={incrementAge}>Increase Age </Button>
            <Count text = "Salary" count= {salary} />
            <Button handleClick={incrementSalary}>Increase Salary </Button>
        </div>
    );
}


useMemo:
--------
const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return countOne % 2 == 0
    }, [countOne])
	
This useMemo will render fater for some other events otherthan this isEven, b4 it will entire component taking more time for rendering.

useRef
---------
we can define a variables which are shared local in component. and also we can use useRef for making focus on input fields

const intervalRef = useRef()

const inputRef = useRef(null)


Custom Hooks:
-------------
A custom hook is a java function whose name start with use.
A custom hooks also called other hooks if required.

react-router-dom
--------------------
DOM bindings for React Router.

Installation
Using npm:

$ npm install --save react-router-dom
Then with a module bundler like webpack, use as you would anything else:

// using ES6 modules
import { BrowserRouter, Route, Link } from "react-router-dom";
 
// using CommonJS modules
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;

The UMD build is also available on unpkg:

<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script> 

https://react-redux.js.org/api/connect

connect() Parameters
connect accepts four different parameters, all optional. By convention, they are called:

mapStateToProps?: Function
mapDispatchToProps?: Function | Object
mergeProps?: Function
options?: Object


React Redux(redux is a library we can integrate this to any ui frameworks like angular, react, velacity ...)
---------------
Redux is a predictable state container for java script apps.(manage the state of your application in a predictable way, redux will help you)
1. redux is javascript application
2. redux is a state container ( to manage state between component)
3. redux is a predictable  
Redux stores and manage the state(state of component) of your applications

Note: we can manaste state between component using React Context or useContext + useReducer (hook). but Redux 1.0 has released in 2015 when there is know context, useContext, useReducer. 

React Redux pakages
--------------------
react-redux 

create redux application:
Create application folder and exe following cmd, it will initialize a package.json file with default values.
 
>npm init --yes 

> npm install redux (it will install redux library)

create index.js file and write console.log 

in terminal run following cmd for exe application
>node index

we can see the log statement in terminal


Three core concepts:
--------------------
A Store that holds the state of your application
an Action that describes the changes in the state of the application.
a Reduce which actually carries out the state transition depending on the action.

Three principales:
--------------------
1. The state of your whole application is stored in the object tree within a single store: Maintain our application state in single object which would managed by the redux store.
2. the only way to change in state is to emit an action, an object describing what happened: to update the state of your app, you need to let Redux know about that with an action.
3. to specify how the state tree is transformed by actions, you write pure reducers:
reducer - (prevState, acton) => newState

     javascript app ---- dispatch ------> Action ---------------> Reducer ------------> Redux Store (State) ----- subscribe ------> javascript app 
	 
Actions:
--------
Actions are the only way to your application to interact with store
Carry some information from your app to redux store.
Actions are plain js
Have a type property that indicates the type of action being performed. The type property tipically defined as string constants

Reducers:
------------
Specify how the app's state changes in response to actions sent to the store.

Reducer is a function that accepts state and action arguments, and returns the next state of the your application.
Ex: (prevState, action) => newState

Redux Store:
-------------
One store for entire application
Responsibilities:
----------------
1. Holds application state
2. Allow access to state via getStore()
3. Allow state to be updated via dispatch(action)
4. Registers listeners via subscribe(listener)
4. Handles unregistering of listeners via function return by subscribe(listener)

Example:
------------
const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

console.log("react redux")

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

// action is an object of type parameter atleast, rest of the parameters are upto user choise.
function buyCake(){
    return {
        type : BUY_CAKE,
        info : 'first redux application'
    }
}
function buyIceCream(){
    return {
        type : BUY_ICE_CREAM,
        info : 'first redux application'
    }
}

const initialState = {
    numOfCakes : 10,
    numOfIceCreams : 20
}

const initialCakeState = {
    numOfCakes : 10
}

const initialIceCreamState = {
    numOfIceCreams : 20
}


// const reducer = (state = initialState, action) =>{
//     switch(action.type) {
//         case 'BUY_CAKE': return {
//             ...state,
//             numOfCakes : state.numOfCakes - 1
//         }
//         case 'BUY_ICE_CREAM': return {
//             ...state,
//             numOfIceCreams : state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) =>{
    switch(action.type) {
        case 'BUY_CAKE': return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) =>{
    switch(action.type) {
        case 'BUY_ICE_CREAM': return {
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})
const store = createStore(rootReducer)
console.log("intial state:",store.getState())
const unsubscribe = store.subscribe(() => console.log('update store:', store.getState(rootReducer.cake)))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

//multiple reducers
// const cakeStore = createStore(cakeReducer)
// console.log("intial cake state:",cakeStore.getState())
// const cakeUnsubscribe = cakeStore.subscribe(() => console.log('update cake store:', cakeStore.getState()))
// cakeStore.dispatch(buyCake())
// cakeStore.dispatch(buyCake())
// cakeStore.dispatch(buyCake())
// cakeUnsubscribe()
// const iceCreamStore = createStore(iceCreamReducer)
// console.log("intial ice cream state:",iceCreamStore.getState())
// const iceCreamUnsubscribe = iceCreamStore.subscribe(() => console.log('update ice cream store:', iceCreamStore.getState()))
// iceCreamStore.dispatch(buyIceCream())
// iceCreamStore.dispatch(buyIceCream())
// iceCreamStore.dispatch(buyIceCream())

// iceCreamUnsubscribe()

Middleware:
---------------
is the suggested way to extend redux with custom functionality.
provides a third party extension point between dispatching an action, and the moment it reaches the reducer.
Use middleware for logging, crash reporting, performing ashynchronous tasks etc.

npm install redux-logger
 
 
Asynchronous Actions:
----------------------
As soon as an action was dispatched, the state state was immediately updated.

Asynchronous Action creators:
-----------------------------
Axios
-----
Request to an API end point

redux-thunk: basically middleware library 
------------
Define Async action creators
Middleware

npm install axios redux-thunk

After creating react redux application:
------------------------------------------
npm install redux react-redux

npm install --save redux-devtools-extension
 

Redirect:
https://reactgo.com/react-router-redirection/

npm install --save react-router

import { Router, Route, browserHistory } from 'react-router'
window.sessionStorage.setItem('sum', sum)
