import React, { Component } from 'react'

class ConditionalRend extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        return (
            <div>
                {this.state.isLoggedIn ? <div>Hello Naman</div> : <div>Hello Stranger</div>}
            </div>
        )
    }
}

export default ConditionalRend
