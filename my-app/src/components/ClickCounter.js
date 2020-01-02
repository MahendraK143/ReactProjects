import React, { Component } from 'react';
import WithCounter from './withCounter';

class ClickCounter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count : 0
    //     }
    // }
    // incrementHandler = () => {
    //     this.setState(prevState =>{
    //         return {count : prevState.count + 1}
    //     })
    // }
    render() {
        const {count,incrementHandler,name} = this.props
        return (
            <div>
                <button onClick={incrementHandler}>{name} Click {count} Counter</button>
            </div>
        );
    }
}

export default WithCounter(ClickCounter,10);