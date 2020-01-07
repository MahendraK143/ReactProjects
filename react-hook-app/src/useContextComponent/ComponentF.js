import React from 'react';
import {UserContext, ChannelContext} from '../App'

function ComponentF(props) {

    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return <div>User Context value: {user}, Channel value: {channel}</div>
                                }
                            }
                        </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
           ComponentF 
        </div>
    );
}

export default ComponentF;