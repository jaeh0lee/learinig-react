import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "hello world" : ""}</p>;
};

export default React.memo(DemoOutput);
