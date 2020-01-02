import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "PSPK"
        }
        console.log("LifeCycleB Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        // return new state or null
        console.log("LifeCycleB getDerivedStateFromProps")
        return null;
    }
    shouldComponentUpdate() {
        console.log("LifeCycleB shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prePops, preState) {
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate() {
        console.log("LifeCycleB componentDidUpdate")
    }
    componentDidMount() {
        console.log("LifeCycleB componentDidMount")
        this.setState({
            name: "PK"
        })
    }
    render() {
        console.log("LifeCycleB render")
        return (
            <React.Fragment>
                <h1>
                    LifeCycleB {this.state.name}
                </h1>
                <p>Love is not an easy thing</p>
            </React.Fragment>

        );
    }
}

export default LifeCycleB;