import React from "react";

import "../styles/Button.css";

function Button({ onClick, disabled, children, className }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
