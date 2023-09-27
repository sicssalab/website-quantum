import React from "react";
import { ContainerCustom } from "../../ui/Containers";
import NavBlogTitles from "../../ui/NavBlogTitles/NavBlogTitles";
import BlogCategoriesCollage from "../BlogCategoriesCollage/BlogCategoriesCollage";
import BlogTopSeccion from "../BlogTopSeccion";

const BodyBlog = (props) => {
  const { items, blogsTop, ...rest } = props;

  return (
    <section className="body-content-blog">
      <ContainerCustom>
        <NavBlogTitles items={items} isLink={true} />
        <BlogCategoriesCollage items={items} {...rest} />
      </ContainerCustom>
      <BlogTopSeccion title={blogsTop.title} items={blogsTop.items}/>
    </section>
  );
};

export default BodyBlog;
