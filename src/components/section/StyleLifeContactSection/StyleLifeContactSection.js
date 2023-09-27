import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ContainerCustom } from "../../ui/Containers";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";

const StyleLifeContactSection = (props) => {
    const { title, description, image, imageMobile } = props;
    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });

    const missionRender = (title || description)
        ? (<div className="box-information">
            <h2 className="title">{title}</h2>
            <p className="description" dangerouslySetInnerHTML={{ __html: description }} />
        </div>)
        : <></>;

    return (<section className="style-life-component">
        <ContainerCustom>
            <div className="mission-body">
                <div className="b">
                    {missionRender}
                </div>
                <div className="a">
                    {(image || imageMobile) && (
                        <LazyLoadImage
                            src={
                                isMobile
                                    ? imageMobile
                                        ? imageMobile
                                        : image
                                    : image
                            }
                            className='size-img'
                            alt={title}
                        />
                    )}
                </div>
            </div>
        </ContainerCustom>
    </section>);
}

export default StyleLifeContactSection;