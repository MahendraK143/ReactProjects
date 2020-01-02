import React, { Component } from 'react';
import HoverCounter from './HoverCounter';
export class HoverCounterTwo extends Component {
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
        const { count, incrementCount} = this.props;
        return (<div>
            <h1 onMouseEnter={incrementCount}> Click {count} Counter</h1>
        </div>);
    }
}

export default HoverCounterTwo