import React, { useEffect, useState } from "react";
import { ContainerCustom } from "../../ui/Containers";
import FloatInverse from "../../ui/boxFloat/FloatInverse";
import SliderGalleryResidential from "../../ui/sliders/SliderGalleryResidential";

const GalleryResidential = (props) => {
    const { title, description, items, floatBoxX, floatBoxY} = props;
    const [visibleSlide, setVisibleSlide] = useState(false);
    //const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD })
    const styleFloat = () => {
        const style = {
            position: "absolute",
            width: "71px",
            height: "71px",
            //rotate: "90deg",
        }

        switch(floatBoxX) {
            case "left":
                style.left = 0;
                break;
            default:
                style.right = 0;
        }
        switch(floatBoxY) {
            case "bottom":
                style.bottom = 0;
                break;
            default:
                style.top = 0;
        }

        return style;
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    
    const scrollHandler = () => {
        const rect = document.getElementById("xlolo");
        if(rect && rect.getBoundingClientRect().top <= window.innerHeight){
            !visibleSlide && setVisibleSlide(true);
        }
    }

    return (
        <div className="gallery-residential-container">
            <FloatInverse sx={styleFloat()} />
            <ContainerCustom id="xlolo">
                {title && <h2 className='title' dangerouslySetInnerHTML={{ __html: title }} />}
                {description && <p className='description' dangerouslySetInnerHTML={{ __html: description }} />}
                <div className="container-slide">
                    {visibleSlide && <SliderGalleryResidential items={items} />}
                </div>
            </ContainerCustom>
        </div>
    );
}

export default GalleryResidential;