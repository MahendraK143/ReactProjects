import React, {Component} from 'react'

class Message extends Component {
    constructor(){
        super();
        this.state = {
            message : 'Welcome Visitor!'
        }
    }
    subscribe = () =>{
        this.setState ({
            message : "Thanks for Subscribing!!!"
        })
    }
    unsubscribe(){
        this.setState ({
            message : "You can not unsubscribe till you close your the account!!!"
        })
    }
    render() {
        return (
                <div>
                    <h1>{this.state.message}</h1>
                    <button onClick={this.subscribe}>Subscribe</button><br/>
                    <button onClick={() => this.unsubscribe()}>UnSubscribe</button>
                    {this.props.children}
                </div>
            )
    }
}

export default Message;