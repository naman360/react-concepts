import React, { Component } from 'react'
import ChildRef from './ChildRef';

export class ParentRef extends Component {
    constructor(props) {
        super(props);
        this.inputRef=React.createRef();
    
    }
    handleClick=()=>{
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <ChildRef ref={this.inputRef} />
                <button onClick={this.handleClick}>Focus Input</button>
            </div>
        )
    }
}

export default ParentRef
