import React, { Component } from 'react'

export class LifecycleA extends Component {
    constructor(props) {            //Inititalize the state and binding events.
        super(props)
    
        this.state = {
             name:'Naman'
        }
        console.log("LifecycleA constructor");
    }
    static getDerivedStateFromProps(props,state){           //Rarely used. In case if your state depends on props and want to change state accordingly
        console.log("Lifecycle A getDerivedStateFromProps"); // use return to return the state or null for nothing
        return {
            name:'Alex'
        }
    }

    componentDidMount(){                                    //When component is mounted(inserted in the DOM), use third party API calls here.
        console.log("LifecycleA componentDidMount");

        fetch('https://api.github.com/users/naman360')
         .then(response => response.json())
         .then(data => this.setState({data}))
    }

    render() {                                                  //For rendering the UI
        console.log("LifecycleA render");
        return (
            <div>
                {/* {JSON.stringify(this.state.data)} */}
            </div>
        )
    }
}

export default LifecycleA
