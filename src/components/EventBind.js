import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

    }
    change(){
        this.setState({
            message:'SetState worked for you!'
        })
    }
    // In onClick event this loses its scope , so we need to bind it to this(class)
    
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onHover={this.change.bind(this)}>Click</button> 
            </div>
        )
    }
}

export default EventBind
