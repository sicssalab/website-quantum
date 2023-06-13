import React from "react";
import { Link } from "react-router-dom";
import { ContainerCustom } from "../../ui/Containers";
import { useGlobalState } from "../../../store/StoreProvider";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import ImgDefault from "../../../assets/img/default.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useMediaQuery } from "react-responsive";
import { LazyLoadImage } from "react-lazy-load-image-component";
import languageUtils from "../../../utils/languageUtils";

const BlogTopSeccion = (props) => {
  const { title, items } = props;
  const { locale, pageData } = useGlobalState();
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });

  const PreArrows = (props) => {
    const { className, style, onClick } = props;
    return (
      <Button className={className} onClick={onClick} style={{ ...style }}>
        <BsChevronLeft />
      </Button>
    )
  }
  const NextArrows = (props) => {
    const { className, style, onClick } = props;

    return (
      <Button className={className} onClick={onClick} style={{ ...style }}>
        <BsChevronRight />
      </Button>
    )
  }

  const settings = {
    dots: false,
    //infinite: true,
    infinite: false,
    speed: 500,
    arrows: false,
    //variableWidth: true,
    //centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 1400,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //     centerMode: false,
      //     variableWidth: true,
      //   }
      // },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinitive: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: false,
          // variableWidth: true
          infinite: true,
          arrows: true,
          prevArrow: <PreArrows />,
          nextArrow: <NextArrows />,
        }
      },
    ]
  };

  return (
    <div className="blog-top-container">
      <ContainerCustom>
        <div>
          {title && (
            <h3 className="title" dangerouslySetInnerHTML={{ __html: title }} />
          )}
        </div>
        <div className="slide-top-blog">
          {items && (
            <Slider {...settings}>
              {items.map((item, i) => {
                return (
                  <Card className="card-topblog" key={i} as={Link} to={`${languageUtils.linksLocale(locale)}blog/${item.slug}`}>
                    <LazyLoadImage className="card-img-top"
                      src={isMobile
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
                      <h5 className="card-title">{item.thumbnailTitle}</h5>
                      <Card.Text>{item.thumbnailDescription}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </Slider>
          )}
        </div>
      </ContainerCustom>
    </div>
  );
};

export default BlogTopSeccion;
