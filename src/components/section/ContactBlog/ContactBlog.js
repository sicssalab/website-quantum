import React from "react";
import useCreateFormHbspt from "../../../hooks/useCreateFormHbspt";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useMediaQuery } from "react-responsive";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactBlog = (props) => {
  const { contact, hbsptSettings, imageMobile, image, altImage } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  useCreateFormHbspt(hbsptSettings);

  return (
    <div className="contact-blog-container position-relative">
      <div className="contact-residential">
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
