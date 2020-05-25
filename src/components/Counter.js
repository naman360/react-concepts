import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    increment(){
        this.setState((state)=>({                 //setState() is asynchronous.
            count: state.count+1
        }))
        
    }
        incrementFive(){
            this.increment();
            this.increment();
            this.increment();
            this.increment();
            this.increment();
        }

        //Directly changing the state does not re-render in the UI, so use setState() always.
    
    render() {
        return (
            <div>
                <h2>Count - {this.state.count}</h2>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
