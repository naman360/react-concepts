import React from 'react';

export default class Welcome extends React.Component{
    render(){
        return(
            // Props are immutable
            <div>
                <h1>Hello {this.props.name}</h1>
                <h3>{this.props.children}</h3>
            </div>
        
        );
    }
}