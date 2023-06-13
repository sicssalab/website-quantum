import React from "react";

const BodyBlogPreview = (props) => {
  const { destino, bodyblogPreview } = props;

  return (
    <div className="preview-body">
      {destino && <div className="tag-destination" dangerouslySetInnerHTML={{ __html: destino }} />}
      {bodyblogPreview && (
        <div dangerouslySetInnerHTML={{ __html: bodyblogPreview }} />
      )}
    </div>
  );
};

export default BodyBlogPreview;
