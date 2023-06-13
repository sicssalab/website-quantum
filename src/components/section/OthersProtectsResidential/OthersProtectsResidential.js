import React, { useEffect, useState } from "react";
import { ContainerCustom } from "../../ui/Containers";
import { useMediaQuery } from 'react-responsive';
import breakpointConstants from "../../../constants/breakpointConstants";
import FloatBoxs from "../../ui/boxFloat/FloatBox/FloatBoxs";
import SliderResidential from "../../ui/sliders/SliderResidential";

const OthersProtectsResidential = (props) => {
    const { title, description, items, } = props;
    const [visibleSlide, setVisibleSlide] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD })

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    
    const scrollHandler = () => {
        const rect = document.getElementById("xother_pro");
        if(rect && rect.getBoundingClientRect().top <= window.innerHeight){
            !visibleSlide && setVisibleSlide(true);
        }
    }

    return (
        <div className="others-proyects-residential-container">
            <FloatBoxs sx={{
                position: "absolute",
                left: 0,
                top: isMobile ? 39 : "5px",
                width: "71px",
                height: "71px",
                rotate:"90deg",
            }} />
            <ContainerCustom id={"xother_pro"}>
                {title && <h2 className='title' dangerouslySetInnerHTML={{ __html: title }} />}
                {description && <p className='description' dangerouslySetInnerHTML={{ __html: description }} />}
                <div className="container-slide">
                {visibleSlide && <SliderResidential items={items} />}
                </div>
            </ContainerCustom>
            {isMobile && (
                <FloatBoxs sx={{
                    position: "absolute",
                    right: isMobile ? 0 : "15px",
                    width: "71px",
                    height: "71px",
                    rotate:"90deg",
                    bottom: "3px",
                }} />
            )}
        </div>
    );
}

export default OthersProtectsResidential;