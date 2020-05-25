import React from 'react';

export default class UsingState extends React.Component{

    constructor(){
        super();
        this.state = {
            message : 'Welcome Stranger!'
        }
    }
    changeText(){
        this.setState({
            message: 'Thank you for subscribing!'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeText()}>Click to Subscribe!</button>
            </div>
        );
    }
}