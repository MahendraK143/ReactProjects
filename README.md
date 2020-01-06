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

React.memo : 
-----------
Useally if we have parent and child component relationship. if there is any change in parent component all the remaining child compoments will render.
So to avoid this problem, we have to use React.momo while exporting perticular component. this means it will allow to render component if there is any changes related to that component.
ex: export defailt React.momo(Component_name)

