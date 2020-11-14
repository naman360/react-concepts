import React from "react";

const ParentHOC = (WrapperComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState({ count: this.state.count + this.props.inc });
    };
    render() {
      return (
        <WrapperComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};
export default ParentHOC;
