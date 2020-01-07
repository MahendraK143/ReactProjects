import React, {useContext} from 'react';
import ComponentF from './ComponentF';
import {UserContext, ChannelContext} from '../App'

function ComponentE(props) {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {/* <ComponentF > */}
                {user} - {channel}
            {/* </ComponentF> */}
        </div>
    );
}

export default ComponentE;