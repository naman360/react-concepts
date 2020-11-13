import React from "react";

const ChildRef = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default ChildRef;
