import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ContainerCustom } from "../../ui/Containers";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";
import FloatInverse from "../../ui/boxFloat/FloatInverse";
import useCreateFormHbspt from "../../../hooks/useCreateFormHbspt";

const ContactShotBlog = (props) => {
  const { contact, hbsptSettings, imageMobile, image, altImage } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  useCreateFormHbspt(hbsptSettings);
  
  return (
    <section className="contat-blog2-form position-relative">
      <ContainerCustom>
        <div className="body">
          <div className="a">
            <LazyLoadImage
              src={isMobile ? (imageMobile ? imageMobile : image) : image}
              className="size-img"
              alt={altImage}
            />
          </div>
          <div className="b">
            <div className="container-form m-auto position-relative">
              {contact && (
                <>
                  {(contact.title || contact.description) && (
                    <div>
                      {contact.title && (
                        <h2
                          dangerouslySetInnerHTML={{ __html: contact.title }}
                        />
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
                          height: isMobile ? "90px" : "75px",
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
      </ContainerCustom>
    </section>
  );
};

export default ContactShotBlog;
