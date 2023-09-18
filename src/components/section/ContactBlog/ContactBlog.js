import React from "react";
import useCreateFormHbspt from "../../../hooks/useCreateFormHbspt";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useMediaQuery } from "react-responsive";
import FloatInverse from "../../ui/boxFloat/FloatInverse";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactBlog = (props) => {
  const { contact, hbsptSettings, imageMobile, image, altImage } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  useCreateFormHbspt(hbsptSettings);
  const styleFloats = {
    position: "absolute",
    right: isMobile ? 0 : "70px",
    top: 0,
    width: "82px",
    height: "82px",
  };
  return (
    <div className="contact-blog-container position-relative">
      <div className="contact-residential">
        <FloatInverse sx={styleFloats} />
        <div className="div-row">
          <div className="container-map">
            <LazyLoadImage
              src={isMobile ? (imageMobile ? imageMobile : image) : image}
              className="size-img"
              alt={altImage}
            />
          </div>
          <div className="container-form m-auto position-relative">
            {contact && (
              <>
                {(contact.title || contact.description) && (
                  <div>
                    {contact.title && (
                      <h2 dangerouslySetInnerHTML={{ __html: contact.title }} />
                    )}
                    {contact.description && (
                      <p
                        className="description"
                        dangerouslySetInnerHTML={{
                          __html: contact.description,
                        }}
                      />
                    )}
                  </div>
                )}
                {hbsptSettings && (
                  <>
                    <div
                      id={`${hbsptSettings.target.replace("#", "")}`}
                      className="id_form_contact_us"
                    ></div>
                    <div
                      style={{
                        background: "white",
                        width: "100%",
                        height: isMobile ? "120px":"100px",
                        position: "absolute",
                        bottom: 0,
                      }}
                    />
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlog;
