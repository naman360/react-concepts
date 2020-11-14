import React, { Component } from 'react'
import ParentHOC from './ParentHOC'

class HOC2 extends Component {
    render() {
        const {count,incrementCount}=this.props;

        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default ParentHOC(HOC2)
