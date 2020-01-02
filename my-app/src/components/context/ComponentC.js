import React, { Component } from 'react';
import ComponentE from './ComponentE';
import { UserProvider } from './userContext';

class ComponentC extends Component {
    render() {
        return (
            <UserProvider value='Power * Pawan Kalyan'>
                <ComponentE />
            </UserProvider>
        );
    }
}

export default ComponentC;