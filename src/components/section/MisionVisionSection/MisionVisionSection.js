import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ContainerCustom } from "../../ui/Containers";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";
import FloatInverse from "../../ui/boxFloat/FloatInverse";

const MisionVisionSection = (props) => {
    const { missionTitle, missionDescription, visionTitle, visionDescription, image, imageMobile } = props;
    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });

    const missionRender = missionTitle
        ? (<div className="box-information">
            <h2 className="title">{missionTitle}</h2>
            <p className="description">{missionDescription}</p>
        </div>)
        : <></>;

    const visionRender = visionTitle
        ? (<div className="box-information">
            <h2 className="title">{visionTitle}</h2>
            <p className="description">{visionDescription}</p>
        </div>)
        : <></>;
        const styleFloats = {
            position: "absolute",
            right: isMobile ? 0 : "70px",
            top: 0,
            width: "82px",
            height: "82px"
          };
    return (<section className="mission-component position-relative">
        <ContainerCustom>
            <div className="mission-body">
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
                        alt={missionTitle}
                    />
                    )}
                </div>
                <div className="b">
                    {missionRender}
                    {visionRender}
                </div>
            </div>
        </ContainerCustom>
    </section>);
}

export default MisionVisionSection;