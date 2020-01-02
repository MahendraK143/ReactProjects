import React from 'react';

function Person({person}) {
    return (
        <div>
            <h2> {person.id} I am {person.name}, {person.age} years old, working as {person.skills}</h2>
        </div>
    );
}

export default Person;