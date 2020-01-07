import React, { Component } from 'react';

class ClassCountUseEffectsOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            name : ''
        }
    }
    componentDidMount(){
        document.title = `${this.state.name} Clicked ${this.state.count} times.`
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            document.title = `${this.state.name} Clicked ${prevState.count} times.`
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
                <button onClick={() => this.setState({ count : this.state.count + 1 })}>Click {this.state.count} times</button>
            </div>
        );
    }
}

export default ClassCountUseEffectsOne;