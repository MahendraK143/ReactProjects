import React, {Component} from 'react'

class ClassClick extends Component {
    clickHandler(){
        alert("class click")
    }
    render() {
        return (
                <div>
                   <button onMouseEnter={this.clickHandler}>click</button>
                </div>
            )
    }
}

export default ClassClick;