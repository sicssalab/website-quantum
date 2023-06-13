import React from "react";
import useCreateFormHbspt from "../../../hooks/useCreateFormHbspt";

const BlogPreviewForm = (props) => {
  const { contact, hbsptSettings } = props;

  useCreateFormHbspt(hbsptSettings);
  return (
    <div className="container-form">
      {contact && (
        <>
          <div>
            {contact.title && (
              <h2 className="title" dangerouslySetInnerHTML={{ __html: contact.title }} />
            )}
            {contact.description && (
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: contact.description }}
              />
            )}
          </div>
          {hbsptSettings && (
            <div
              id={`${hbsptSettings.target.replace("#", "")}`}
              className="id_form_contact_us"
            ></div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogPreviewForm;
