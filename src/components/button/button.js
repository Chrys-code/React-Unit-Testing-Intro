import React from "react";
import "./buttonStyle.css";

function Button({ label }) {
  return (
    <button data-testid="button" className="button-style">
      Hi,{label}
    </button>
  );
}

export default Button;
