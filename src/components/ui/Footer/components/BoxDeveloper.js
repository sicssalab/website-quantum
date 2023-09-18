import React from "react";
const BoxDeveloper = () => {
  return (
    <div className="content-by">
      <p
        style={{ paddingTop: "30px", fontSize: "16px" }}
      >{`${new Date().getFullYear()} © Quantum Analytical Solutions for Quality Assurance.`}</p>
    </div>
  );
};

export default BoxDeveloper;
