
import React from "react";
//import FloatInverse from "../FloatInverse";
import imagen from "../../../../assets/img/textura-blanco.svg";
import { Image } from 'react-bootstrap'

const FloatBoxs = (props) => {
    const {sx} = props
    return ( <Image alt={"box-inverte"} src={imagen} className="box-inverte-colors" style={sx} />);
}

FloatBoxs.defaultProps = {
    color: "backgroundSegundary.main",
    colorSecondary: "backgroundPrimary.main",
    numbers: 13
}
export default FloatBoxs;