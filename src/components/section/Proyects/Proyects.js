import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import SliderImageInformation from "../../ui/sliders/SliderImageInformation/SliderImageInformation";
import { useMediaQuery } from 'react-responsive';
import breakpointConstants from "../../../constants/breakpointConstants";
import {useGlobalState} from "../../../store/StoreProvider";
import { Link } from "react-router-dom";
import languageUtils from "../../../utils/languageUtils";

const Proyects = (props) => {
    const { title, description, items, linkMore, textMore} = props;
    const [visibleSlide, setVisibleSlide] = useState(false);
    const {locale} = useGlobalState();
    const isMobile = useMediaQuery( { maxWidth: breakpointConstants.LG })

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scrollHandler = () => {
        const rect = document.getElementById("xlolo_home");
        if(rect && rect.getBoundingClientRect().top <= window.innerHeight){
            !visibleSlide && setVisibleSlide(true);
        }
    }

    return ( 
        <div className="proyects-container">
            <div id="xlolo_home" className="proyects">
                <div className="container-body">
                    <div className="container-info">
                        <div className="container-info-body">
                        {title && <h2 dangerouslySetInnerHTML={{__html: title}} />}
                        {description && <p className="description" dangerouslySetInnerHTML={{__html: description}} />}
                        {(linkMore && textMore && !isMobile) && (
                            <Button as={Link} to={`${languageUtils.linksLocale(locale)}${linkMore}`} className="mt-4 mb-4 button-link" variant="link">{textMore}</Button>
                        )}
                        </div>
                    </div>
                    <div className="container-slide">
                    {visibleSlide && <SliderImageInformation items={items} />}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Proyects;