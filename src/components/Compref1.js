import React, { Component } from 'react'
import Compref2 from './Compref2'

export class Compref1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.compRef=React.createRef();
    }
    handleClick=()=>{
        this.compRef.current.focusInput();
    }
    render() {
        return (
            <div>
                <Compref2 ref={this.compRef} />
                <button onClick={this.handleClick}>Focus it</button>
            </div>
            
        )
    }
}

export default Compref1
