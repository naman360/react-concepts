import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             choice:'React'
        }

    }
    handleUsername = event => {
        this.setState({
            username:event.target.value
        });
    }
    handlePassword = event => {
        this.setState({
            password:event.target.value
        });
    }
    handleChoice = event => {
        this.setState({
            choice:event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }
    
    render() {
        const {username,password,choice} = this.state;
        return (
            <div>
                <h2>Basics of form handling!</h2>

                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={this.handleUsername} /> <br/><br/>

                    <label>Password: </label>
                    <input type="password" value={password} onChange={this.handlePassword}  /> <br/><br/>

                    <select value={choice} onChange={this.handleChoice} >
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select> <br/><br/>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
