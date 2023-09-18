import React from "react";
const BoxDeveloper = () => {
  return (
    <div className="content-by">
      <p
        style={{ paddingTop: "30px", fontSize: "16px" }}
      >{`${new Date().getFullYear()} © SICSSA LAB - Developers`}</p>
    </div>
  );
};

export default BoxDeveloper;
