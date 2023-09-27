import React, { useEffect, useState } from "react";
import { ContainerCustom } from "../../ui/Containers";
import SliderResidential from "../../ui/sliders/SliderResidential";

const OthersProtectsResidential = (props) => {
    const { title, description, items, } = props;
    const [visibleSlide, setVisibleSlide] = useState(false);

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
            <ContainerCustom id={"xother_pro"}>
                {title && <h2 className='title' dangerouslySetInnerHTML={{ __html: title }} />}
                {description && <p className='description' dangerouslySetInnerHTML={{ __html: description }} />}
                <div className="container-slide">
                {visibleSlide && <SliderResidential items={items} />}
                </div>
            </ContainerCustom>
        </div>
    );
}

export default OthersProtectsResidential;