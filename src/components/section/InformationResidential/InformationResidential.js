import React from "react";
import { useIntl } from "react-intl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FloatBoxs from "../../ui/boxFloat/FloatBox/FloatBoxs";
import { ContainerCustom } from "../../ui/Containers";
import imgHousing from "../../../assets/icons/viviendas.svg";
import imgLocation from "../../../assets/icons/ubicacion.svg";
import imgStatus from "../../../assets/icons/status.svg";
import imgConstruction from "../../../assets/icons/construccion.svg";
import MediaVideo from "../Experience/components/MediaVideo";

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

    const intl = useIntl();

    return (<div className="information-residential-container">
        <ContainerCustom>
            <FloatBoxs sx={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "78px",
                height: "75px",
                rotate: "90deg",
            }} />
            <div className="content-information">
                <div>
                    {isNewResidential && (
                        <>
                        <p className="son-title">{soon}</p>
                        <p className="soon">{title}</p>
                        </>
                    )}
                    {(isNewResidential === undefined
                    || isNewResidential === null
                    || !isNewResidential) && (
                        <>
                        {logoUrl && (
                            <a href={logoUrl} target="_blank" rel="noreferrer" className="w-100">
                                <LazyLoadImage
                                    src={logo}
                                    className="logo"
                                    alt={title}
                                />
                            </a>
                        )}
                        {(logoUrl === undefined
                        || logoUrl === null
                        || logoUrl === "") && (
                                <LazyLoadImage
                                    src={logo}
                                    className="logo"
                                    alt={title}
                                />
                        )}
                        </>
                    )}
                    {description && (<p className="description" dangerouslySetInnerHTML={{ __html: description }} />)}
                </div>
                <div>
                    <div className="box-info-container">
                        <div className="box-info-services">
                            <LazyLoadImage
                                src={imgHousing}
                                className="img Housing"
                                height={60}
                                width={55}
                            />
                            <span className="min-title">{intl.formatMessage({ id: "website.housing" })}:</span>
                            {housing && <span className="min-descrip" dangerouslySetInnerHTML={{ __html: housing }} />}
                        </div>
                        <div className="box-info-services">
                            <LazyLoadImage
                                src={imgLocation}
                                className="img Location"
                                height={60}
                                width={55}
                            />
                            <span className="min-title">{intl.formatMessage({ id: "website.location" })}:</span>
                            {location && <span className="min-descrip" dangerouslySetInnerHTML={{ __html: location }} />}
                        </div>
                        <div className="box-info-services">
                            <LazyLoadImage
                                src={imgStatus}
                                className="img status"
                                height={60}
                                width={55}
                            />
                            <span className="min-title">{intl.formatMessage({ id: "website.status" })}:</span>
                            {status && <span className="min-descrip" dangerouslySetInnerHTML={{ __html: status }} />}
                        </div>
                        <div className="box-info-services">
                            <LazyLoadImage
                                src={imgConstruction}
                                className="img constuction"
                                height={60}
                                width={55}
                            />
                            <span className="min-title">{intl.formatMessage({ id: "website.construccion" })}:</span>
                            {construction && <span className="min-descrip" dangerouslySetInnerHTML={{ __html: construction }} />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-video-information">
                <MediaVideo {...rest} />
            </div>
        </ContainerCustom>
    </div>);
}

export default InformationResidential;