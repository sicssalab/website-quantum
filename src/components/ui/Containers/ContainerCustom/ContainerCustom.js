import React from "react";
//import Container from 'react-bootstrap/Container';

const ContainerCustom = (props) => {
    const {children, className, ...rest} = props;

    return ( <div className={`container-custom ${className}`}
    //fluid="xl"
    {...rest}>
        {children}
    </div> );
}
ContainerCustom.defaultProps = {
    className: ''
}
export default ContainerCustom;