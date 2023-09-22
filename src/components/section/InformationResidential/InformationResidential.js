import React from "react";
import { useIntl } from "react-intl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ContainerCustom } from "../../ui/Containers";
import MediaVideo from "../Experience/components/MediaVideo";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";

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
    ...rest
    // altImage,
    // frontPage,
    // frontPageMobile,
    // videoLink,
  } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });

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
          <div style={{flexGrow: 1, paddingLeft: isMobile ? 0 : 30}}>
            <div className="content-video-information">
              <MediaVideo {...rest} />
            </div>
          </div>
        </div>
      </ContainerCustom>
    </div>
  );
};

export default InformationResidential;
