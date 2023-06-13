import React from "react";
import { ContainerCustom } from "../../ui/Containers";
import FloatBoxs from "../../ui/boxFloat/FloatBox/FloatBoxs";
import SliderPress from "./components/SliderPress";
import { useMediaQuery } from 'react-responsive';
import breakpointConstants from "../../../constants/breakpointConstants";


const Proyects = (props) => {
    const { title, description, items } = props;

    return (
        <div className="press-container">
            <ContainerCustom>
                {title && <h2 className='text-center' dangerouslySetInnerHTML={{ __html: title }} />}
                {description && <p className='text-center description' dangerouslySetInnerHTML={{ __html: description }} />}
            </ContainerCustom>
            <div className="press-custom">
                <div className="press-item">
                    <SliderPress items={items} />
                </div>
            </div>
        </div>
    );
}

export default Proyects;