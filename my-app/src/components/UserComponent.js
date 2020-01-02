import React, { Component } from 'react';
import Person from './Person';

class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false,
            persons : [
                {
                    id: 1,
                    name : "Mahendra",
                    age : 27,
                    skills : "Java"
                },
                {
                    id: 3,
                    name : "Anji",
                    age : 27,
                    skills : "Unix"
                },
                {
                    id: 2,
                    name : "Yogi",
                    age : 28,
                    skills : "Java"
                }
                ]
        }
    }
    
    render() {
        const {persons} = this.state
    
        const nameList = persons.map(person => <Person person = {person} key = {person.id}/>)
        return <div>{nameList}</div>
        // return (
        // <div>
        //     <h2>{this.state.names[0]}</h2>
        //     <h2>{this.state.names[1]}</h2>
        //     <h2>{this.state.names[2]}</h2>
        // </div>
        // )

        // return this.state.isLoggedIn && <div>Welcome Mahendra</div>
        // return this.state.isLoggedIn ? <div>Welcome Mahendra</div> : <div>Welcome to Guest</div>
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Mahendra</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Mahendra</div>
        //         <div>Welcome PSPK</div>
        //     </div>
        // );
    }
}

export default UserComponent;