import React from "react";

var Button = (props) => {
  return (
    <div
      onClick={() => props.onClick()}
      style={{
        backgroundColor: props.selectedColor,
        width: "10vw",
        color: "white",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      Pick a Color
    </div>
  );
};
export default Button;
