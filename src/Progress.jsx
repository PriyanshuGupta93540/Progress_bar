import React from "react";

const Example = ({ progress, color }) => {
  const styleObj = {
    width: `${progress}%`,
    height: "30px",
    backgroundColor: color,
    borderRadius: "26px",
  };

  return (
    <div className="main">
      <h1 className="progress">Progress Bar</h1>
      <div className="container">
        <div style={styleObj}>{`${progress}%`}</div>
      </div>
    </div>
  );
};

export default Example;
