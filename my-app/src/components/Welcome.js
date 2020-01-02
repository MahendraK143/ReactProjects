import React, {Component} from 'react'

class Welcome extends Component {
    // render() {
    //     return (
    //             <div>
    //                 <h1>Welcome to {this.props.name}!</h1>
    //                 {this.props.children}
    //             </div>
    //         )
    // }

    // Destructuring props and state
    render() {
        const {name, children} = this.props
        return (
                <div>
                    <h1>Welcome to {name}!</h1>
                    {children}
                </div>
            )
    }
}

export default Welcome;