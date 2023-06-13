import React from "react";
import BlogPreviewForm from "./BlogPreviewForm";
import BlogMoreView from "./BlogMoreView";

const BlogPreviewNavBar = (props) => {
  const { items } = props;

  const selectComponentPage = (item, position) => {
    //TODO identificamos a X pagina y decimos como pintarla
    //TODO dinamic-page ejemplo de header y footer desde el componentePage y no desde el layout
    const { type, ...rest } = item;

    switch (type) {
      case "contact-blog-preview":
        return <BlogPreviewForm key={position} {...rest} />;
      case "more-view-blog":
        return <BlogMoreView key={position} {...rest} />;
      default:
        return <div key={position}></div>;
    }
  };

  return (
    <div className="nav-right-options-blog">
      {items &&
        items.map((item, i) => selectComponentPage(item, i))}
    </div>
  );
};

export default BlogPreviewNavBar;
