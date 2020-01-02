import React, {Component} from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    increment () {
        // this.setState({
        //     count : this.state.count + 1
        // },
        // () => {
        //     console.log("Call back value:"+this.state.count)
        // }
        this.setState((prevState, props)=>({
            count: prevState.count + props.count
        }))
        console.log(this.state.count)
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
                <div>
                    <div>
                        count : {this.state.count}
                    </div>
                    <button onClick={()=>this.incrementFive()}>Increment</button>
                </div>
            )
    }
}

export default Counter;