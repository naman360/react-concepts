import React, { Component } from "react";

export class Compref2 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.inpRef = React.createRef();
  }
focusInput=()=>{
    this.inpRef.current.focus();
}
  render() {
    return <input type="text" ref={this.inpRef} />;
  }
}

export default Compref2;
