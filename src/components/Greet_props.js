import React from 'react';

const Greet = props => {
    return (
        // Props are immutable.
        <div>
            <h1>Hello {props.name} </h1>
            <h3>{props.children}</h3>
        </div>
    );
}

export default Greet;
