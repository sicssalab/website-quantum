import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import breakpointConstants from "../../../../constants/breakpointConstants";
import { useMediaQuery } from "react-responsive";

const ImgCategory = (props) => {
    const { item, isInitial } = props;
    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD })

    const renderImg = () => {
        let component = null;
        switch (isInitial) {
            case true:
                component = isMobile
                    ? item.thumbnailImageBigMobile
                        ? item.thumbnailImageBigMobile
                        : item.thumbnailImageBig
                    : item.thumbnailImageBig;
                break
            default:
                component = isMobile
                    ? item.thumbnailImageMobile
                        ? item.thumbnailImageMobile
                        : item.thumbnailImage
                    : item.thumbnailImage;
        }

        return component;
    }
    return (<div className="thumbnail-category">
        <LazyLoadImage
            src={renderImg()}
            className='size-img'
            alt={item.name}
        />
        <div className="thumbnail-degraded"/>
        <div className="thumbnail-body">
            <h5 className="title">{item.name}</h5>
            <p className="description">{item.thumbnailDescription}</p>
        </div>
    </div>);
}

export default ImgCategory;