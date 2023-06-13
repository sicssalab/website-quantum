import React from "react";
import useCreateFormHbspt from "../../../hooks/useCreateFormHbspt";
import { LazyLoadImage } from "react-lazy-load-image-component";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useMediaQuery } from "react-responsive";
import FloatBoxs from "../../ui/boxFloat/FloatBox/FloatBoxs";
const ContactBlog = (props) => {
    const { image, imageMobile, contact, altImage, hbsptSettings } = props;
    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD })
    useCreateFormHbspt(hbsptSettings);
    const styleFloats = {
        position: "absolute",
        left: 56,
        top: isMobile? 5: 22,
        width: "60px",
        height: "65px"
      };

    return (
        <div className="contact-blog-container">
            <div className="contact-residential">
                <div className="div-row">
                    <div className="container-map">
                        <LazyLoadImage
                            src={isMobile
                                ? imageMobile
                                    ? imageMobile
                                    : image
                                : image}
                            className='size-img'
                            alt={altImage}
                        />
                        <FloatBoxs sx={styleFloats} color="white" />
                    </div>
                    <div className="container-form">
                        {contact && (
                            <>
                                {(contact.title || contact.description) && <div>
                                    {contact.title && <h2 dangerouslySetInnerHTML={{ __html: contact.title }} />}
                                    {contact.description && <p className="description" dangerouslySetInnerHTML={{ __html: contact.description }} />}
                                </div>}
                                {hbsptSettings && (
                                    <div id={`${hbsptSettings.target.replace('#', '')}`} className="id_form_contact_us"></div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactBlog;