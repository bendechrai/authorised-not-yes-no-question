import React from "react";
import { Slide } from "@sambego/diorama";

const Alert = () => {
  const alert = () => {
    window.alert("Hey look, an alert right here in the presentation!");
  };

  return (
    <Slide>
      <button
        style={{
          background: "#99c794",
          padding: "1rem 2rem",
          borderRadius: ".5rem",
          border: "none",
          outline: "none",
          fontSize: "3vw",
          fontWeight: 700,
          cursor: "pointer"
        }}
        onClick={alert}
      >
        Click me
      </button>
    </Slide>
  );
};

export default Alert;
