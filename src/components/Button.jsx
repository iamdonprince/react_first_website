import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonSizes} ${checkButtonStyle}`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
