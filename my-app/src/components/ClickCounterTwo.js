import React, { Component } from 'react';

class ClickCounterTwo extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count : 0
    //     }
    // }
    // incrementHandler = () => {
    //     this.setState(prevState => {
    //         return {count : prevState.count + 1}
    //     })
    // }
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Click {count} times</button>
            </div>
        );
    }
}

export default ClickCounterTwo;
