import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comments: '',
            topic: ''
        }
    }
    handlerUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlerComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handlerTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(` 
                User Name : ${this.state.username}
                Comments : ${this.state.comments}
                Topic : ${this.state.topic}`);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                User Form
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>User Name:</label>
                        <input type="text" value={this.state.username} onChange={this.handlerUsername}></input>
                    </div>
                    <div>
                        <label>Comments:</label>
                        <textarea type="text" value={this.state.comments} onChange={this.handlerComments}></textarea>
                    </div>
                    <div>
                        <label>Topic:</label>
                        <select type="text" value={this.state.topic} onChange={this.handlerTopic}> 
                            <option value="Angular">Angular</option>
                            <option value="React">React</option>
                            <option value="Java Script">Java Script</option>
                        </select>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;