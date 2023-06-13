import React from "react";
const CirceButton = (props) => {
    const {fill, radius, x, y, className} = props;
    const onClick = () => {
        const {onClick} = props;
        onClick && onClick();
    }

  return (
    <div className={className}
      style={{
        position: "absolute",
        left: x - (radius/2),
        top: y - (radius/2),
        borderRadius: "50%",
        width: `${radius}px`,
        height: `${radius}px`,
        cursor: 'pointer',
        background: fill,
      }}
      onClick={onClick}
    />
  );
};

export default CirceButton;
