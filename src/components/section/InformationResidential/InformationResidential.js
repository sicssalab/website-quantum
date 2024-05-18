import React from "react";
import { useIntl } from "react-intl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ContainerCustom } from "../../ui/Containers";
import MediaVideo from "../Experience/components/MediaVideo";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";
import GalleryResidential from "../GalleryResidential/GalleryResidential";
import SliderGalleryResidential from "../../ui/sliders/SliderGalleryResidential";

const InformationResidential = (props) => {
  const {
    logo,
    title,
    description,
    housing,
    location,
    status,
    construction,
    logoUrl,
    soon,
    isNewResidential,
    gallery,
    ...rest
  } = props;
  const isTablet = useMediaQuery({ maxWidth: breakpointConstants.LG });

  return (
    <div className="information-residential-container">
      <ContainerCustom>
        <div className="content-information">
          <div>
            {isNewResidential && (
              <>
                <p className="son-title">{soon}</p>
                <p className="soon">{title}</p>
              </>
            )}
            {(isNewResidential === undefined ||
              isNewResidential === null ||
              !isNewResidential) && (
              <>
                {logoUrl && (
                  <a
                    href={logoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-100"
                  >
                    <LazyLoadImage src={logo} className="logo" alt={title} />
                  </a>
                )}
                {(logoUrl === undefined ||
                  logoUrl === null ||
                  logoUrl === "") && (
                  <LazyLoadImage src={logo} className="logo" alt={title} />
                )}
              </>
            )}
            {description && (
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
          <div style={{flexGrow: 1, paddingLeft: isTablet ? 0 : 30}}>
            {gallery && (
              <div className="content-gallery-information">
                <SliderGalleryResidential items={gallery} />
              </div>
            )}
            {!gallery && (<div className="content-video-information">
              <MediaVideo {...rest} />
            </div>)}
          </div>
        </div>
      </ContainerCustom>
    </div>
  );
};

export default InformationResidential;
