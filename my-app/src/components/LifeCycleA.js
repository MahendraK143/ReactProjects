import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "Mahendra"
        }
        console.log("LifeCycleA Constructor")
    }

    static getDerivedStateFromProps(props,state){
        // return new state or null
        console.log("LifeCycleA getDerivedStateFromProps")
        return null;
    }
    
    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true;    
    }
    getSnapshotBeforeUpdate(prePops, preState){
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate")
    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
        this.setState({
            name: "KOLA"
        })
    }
    changeState = () => {
        this.setState({
            name : 'PSPK MAHENDRA'
        })
    }
    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                LifeCycleA {this.state.name}
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB />
            </div>
        );
    }
}

export default LifeCycleA;