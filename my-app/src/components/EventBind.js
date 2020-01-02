import React, {Component} from 'react'

class EventBind extends Component {
    constructor(){
        super();
        this.state = {
            message: "hello"
        }
        // third approach
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message : "Good Bye!"
    //     })
    // }

    // fourth approach
    clickHandler = () => {
        this.setState({
            message : "Good Bye!"
        })
    }
    render() {
        return (
                <div>
                    <div><h2>{this.state.message}</h2></div>
                    {/* first approach */}
                   {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                   {/* second approach */}
                   {/* <button onClick={()=>this.clickHandler()}>click</button> */}
                   <button onClick={this.clickHandler}>click</button>
                </div>
            )
    }
}

export default EventBind;