import React from "react";
import { ContainerCustom } from "../../ui/Containers";
import SliderPress from "./components/SliderPress";
import { useMediaQuery } from 'react-responsive';
import breakpointConstants from "../../../constants/breakpointConstants";

const PressContact = (props) => {
    const { title, description, items } = props;

    return (
        <div className="press-contact-container">
            <ContainerCustom>
            <div className="press-custom">
                <div className="press-item">
                    <SliderPress items={items} />
                </div>
            </div>
            </ContainerCustom>
        </div>
    );
}

export default PressContact;