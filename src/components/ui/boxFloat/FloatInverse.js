import React from "react";
import imagen from "../../../assets/img/textura-2.svg";
import { Image } from 'react-bootstrap'

const FloatInverse = (props) => {
    const {sx} = props;
    return ( <Image alt={"box-inverte"} src={imagen} className="box-inverte-colors" style={sx} />);
}

export default FloatInverse;