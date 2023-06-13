
import React from "react";
const FloatBoxs = (props) => {
    const {sx, color, colorSecondary, numbers} = props
    return ( <div className="container-boxfloats" style={{width: "133px", ...sx}}>
            {Array.from(Array(numbers)).map((_, index) => (
                <div key={index} style={{backgroundColor: index % 2 === 0 ? color: colorSecondary, width: "13px"}}  />
            ))}
    </div> );
}

FloatBoxs.defaultProps = {
    color: "backgroundSegundary.main",
    colorSecondary: "backgroundPrimary.main",
    numbers: 13
}
export default FloatBoxs;