import React from "react";
import { Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";
import languageUtils from "../../../utils/languageUtils";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../../store/StoreProvider";
import ImgDefault from "../../../assets/img/default.jpg";

const BlogMoreView = (props) => {
  const { title, items } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const { locale } = useGlobalState();

  return (
    <div className="blog-preview-content">
      <h5 className="title">{title}</h5>
      <div className="blog-preview-content-items">
        {items &&
          items.map((item, i) => {
            return (
              <Card
                className="card-topblog"
                key={i}
                as={Link}
                to={`${languageUtils.linksLocale(locale)}blog/${item.slug}`}
              >
                <LazyLoadImage
                  className="card-img-top"
                  src={
                    isMobile
                      ? item.thumbnailImageMobile
                        ? item.thumbnailImageMobile
                        : item.thumbnailImage
                        ? item.thumbnailImage
                        : ImgDefault
                      : item.thumbnailImage
                      ? item.thumbnailImage
                      : ImgDefault
                  }
                  alt={item.thumbnailTitle}
                />
                <Card.Body>
                  <h6 className="card-title">{item.thumbnailTitle}</h6>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default BlogMoreView;
