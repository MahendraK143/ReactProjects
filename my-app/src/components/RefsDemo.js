import React, { Component } from 'react';
import { element } from 'prop-types';
import Input from './Input'

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
    
    componentDidMount(){
        // if(this.cbRef) {
        //     this.cbRef.focus()
        // }
        // this.inputRef.current.focus();
        console.log(this.inputRef);
    }
    handlerClick = () =>{
        this.inputRef.current.focusInput()
        // alert(this.inputRef.current.value);
    }
    render() {
        return (
            <React.Fragment>
                <Input ref={this.inputRef}/>
                {/* <input type="text" ref={this.inputRef}/> */}
                {/* <input type="text" ref={this.setCbRef}/> */}
                <button onClick={this.handlerClick}>Click</button>
            </React.Fragment>
        );
    }
}

export default RefsDemo;