import React from "react";

function Button(props) {
  return (
    <>
      <button data-testid={props.id}>Merhaba</button>
    </>
  );
}

export default Button;
