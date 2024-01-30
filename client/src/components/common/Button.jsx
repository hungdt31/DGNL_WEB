import React from "react";

const Button = ({ text }) => {
  return (
    <button className="hover:bg-cyan-200 rounded-lg px-3 py-2 border-cyan-900 border-2">
      {text}
    </button>
  );
};

export default Button;
