import React from 'react'

function greet1(){
    return <h1>Hello Mahendra</h1>
}

// using arrow function
// named export, can import into same greet name otherwise will get an error.

// export const Greet = (props) => {
//     return (
//         <div>
//             <h1>Hello {props.name} {props.age}!</h1>
//             {props.children}
//         </div>
//     );
// }

// Destructuring props and state
export const Greet = ({name,age,children}) => {
    return (
        <div>
            <h1>Hello {name} {age}!</h1>
            {children}
        </div>
    );
}

//default export , can import into any user preferred name
//export default greet