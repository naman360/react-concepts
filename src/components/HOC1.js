import React, { Component } from 'react'
import ParentHOC from './ParentHOC'
class HOC1 extends Component {
    render() {
        const {count,incrementCount}=this.props;
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ParentHOC(HOC1)
