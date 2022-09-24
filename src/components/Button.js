import React from "react";

function Button(props) {
  return (
    <>
      <button
        data-testid={props.id}
        className={props.className}
        style={props.style}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;
