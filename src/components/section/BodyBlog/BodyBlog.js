import React from "react";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";
import { ContainerCustom } from "../../ui/Containers";
import NavBlogTitles from "../../ui/NavBlogTitles/NavBlogTitles";
import BlogCategoriesCollage from "../BlogCategoriesCollage/BlogCategoriesCollage";
import BlogTopSeccion from "../BlogTopSeccion";
import FloatBoxs from "../../ui/boxFloat/FloatBox/FloatBoxs";
const BodyBlog = (props) => {
  const { items, blogsTop, ...rest } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD })
  const styleFloats = {
    position: "absolute",
    right: 0,
    top: isMobile? 5: 2,
    width: "82px",
    height: "82px"
  };
  return (
    <section className="body-content-blog">
        <FloatBoxs sx={styleFloats} />
      <ContainerCustom>
        <NavBlogTitles items={items} isLink={true} />
        <BlogCategoriesCollage items={items} {...rest} />
      </ContainerCustom>
      <BlogTopSeccion title={blogsTop.title} items={blogsTop.items}/>
    </section>
  );
};

export default BodyBlog;
