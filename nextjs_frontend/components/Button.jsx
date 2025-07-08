import React from "react";

// PUBLIC_INTERFACE
/**
 * Button component
 * @param {*} param0 
 * @returns Button
 */
const Button = ({ children, ...props }) => (
  <button
    className="px-4 py-2 rounded bg-primary text-white hover:bg-accent transition disabled:bg-secondary"
    {...props}
  >
    {children}
  </button>
);

export default Button;
