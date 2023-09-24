import React, { useEffect, useState } from "react";
import { ContainerCustom } from "../../ui/Containers";
import SliderGalleryResidential from "../../ui/sliders/SliderGalleryResidential";

const GalleryResidential = (props) => {
    const { title, description, items} = props;
    const [visibleSlide, setVisibleSlide] = useState(false);

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