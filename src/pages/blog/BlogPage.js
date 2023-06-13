import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/ui/Footer/Footer";
import HeaderSEO from "../../components/ui/HeaderSEO";
import { useGlobalState } from "../../store/StoreProvider";
import MainBlog from "../../components/section/MainBlog/MainBlog";
import useCallBlogPages from "../../hooks/useCallBlogPages";
import BodyBlogPreview from "../../components/section/BodyBlogPreview";
import BlogPreviewNavBar from "./components/BlogPreviewNavBar";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../constants/breakpointConstants";
import { ContainerCustom } from "../../components/ui/Containers";
import FloatBoxs from "../../components/ui/boxFloat/FloatBox/FloatBoxs";
import { Col, Row } from "react-bootstrap";
import FloatInverse from "../../components/ui/boxFloat/FloatInverse";

const BlogPage = (props) => {
  const { locales } = props;
  const { pageData, routesData } = useGlobalState();
  const { id: idSlug } = useParams();
  const headerParams = pageData.items
    ? pageData.items.find((item) => item.type === "header-blog-preview")
    : {};
  const body = pageData.items
    ? pageData.items.find((item) => item.type === "body-blog-preview")
    : {};
  const itemsNavBar = pageData.items
    ? pageData.items.filter((item) => item.type !== "body-blog-preview" && item.type !== "header-blog-preview")
    : {};
  useCallBlogPages(idSlug);
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });

  const styleFloats = {
    position: "absolute",
    right: isMobile ? 0 : 30,
    top: isMobile ? 5 : -3,
    width: "75px",
    height: "82px",
    transform: "rotate(90deg)",
  };

  return (
    <div className="html-blog-preview-body">
      {routesData.isSuccess && headerParams && (
        <MainBlog locales={locales} {...headerParams} />
      )}
      {pageData.isFetching && <p className="text-black">Loading...</p>}
      {pageData.isError && <p className="text-black">Ups! we have a problem</p>}
      {pageData.isSuccess && (
        <>
          <HeaderSEO />
          <div className="body-content-blog-preview">
            <ContainerCustom className="container-interno-body-preview">
              <FloatBoxs sx={styleFloats} />
              <Row>
                <Col className="col-xs-12 col-md-8 col-12">
                  <BodyBlogPreview {...body} />
                </Col>
                <Col className="col-xs-12 col-md-4 col-12">
                    <BlogPreviewNavBar items={itemsNavBar} />
                </Col>
              </Row>
            </ContainerCustom>
            <FloatInverse
              sx={{
                width: "90px",
                height: "90px",
                position: "absolute",
                left: 0,
                bottom: 0,
              }}
            />
          </div>
        </>
      )}
      {routesData.isSuccess && <Footer {...routesData.footer} />}
    </div>
  );
};

export default BlogPage;
