import React, { Component } from 'react';
import WithCounter from './withCounter';

class HoverCounter extends Component {
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
                <h1 onMouseEnter={incrementHandler}>{name} Click {count} Counter</h1>
            </div>
        );
    }
}

export default WithCounter(HoverCounter,5);